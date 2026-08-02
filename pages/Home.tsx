import React, { useState, useEffect } from 'react';
import DocumentCard from '../components/DocumentCard';
import CollectionCard from '../components/CollectionCard';
import { documents } from '../data/documents';
import { collections } from '../data/collections';
import { HistoricalDocument, DocumentCollection } from '../types';

type EraItem =
  | { kind: 'document'; data: HistoricalDocument }
  | { kind: 'collection'; data: DocumentCollection };

// Eras que são agrupadas sob a aba "Antiguidade"
const ANTIGUIDADE_ERAS = ['Mesopotâmia', 'Anatólia Antiga', 'Egito Antigo', 'Índia Antiga'];
// Ordem das sub-seções dentro de "Antiguidade"
const ANTIGUIDADE_ORDER = ['Mesopotâmia', 'Anatólia Antiga', 'Egito Antigo', 'Índia Antiga'];

const ERA_ORDER = ['Antiguidade', 'Grécia Antiga', 'Roma', 'Idade Média', 'Idade Contemporânea'];

// Mapeia era real → era de navegação (aba)
const getNavEra = (era: string): string => {
  if (ANTIGUIDADE_ERAS.includes(era)) return 'Antiguidade';
  return era;
};

interface EraSection {
  navEra: string;          // era usada na aba de nav
  subSections: {
    name: string;          // nome exibido (pode ser igual ao navEra ou sub-seção)
    items: EraItem[];
  }[];
}

const Home: React.FC = () => {
  // Coletar todos os items (excluindo sub-documentos/sub-coleções)
  const allItems: { navEra: string; realEra: string; item: EraItem }[] = [];

  collections
    .filter(col => !col.parentCollectionId)
    .forEach((col) => {
      allItems.push({ navEra: getNavEra(col.era), realEra: col.era, item: { kind: 'collection', data: col } });
    });

  documents
    .filter(doc => !doc.parentCollectionId)
    .forEach((doc) => {
      allItems.push({ navEra: getNavEra(doc.era), realEra: doc.era, item: { kind: 'document', data: doc } });
    });

  // Agrupar por navEra → sub-seções por realEra
  const eraSectionMap: Map<string, Map<string, EraItem[]>> = new Map();

  allItems.forEach(({ navEra, realEra, item }) => {
    if (!eraSectionMap.has(navEra)) eraSectionMap.set(navEra, new Map());
    const sub = eraSectionMap.get(navEra)!;
    if (!sub.has(realEra)) sub.set(realEra, []);
    sub.get(realEra)!.push(item);
  });

  // Construir array ordenado de EraSection
  const eraSections: EraSection[] = [];

  ERA_ORDER.forEach((navEra) => {
    if (!eraSectionMap.has(navEra)) return;
    const subMap = eraSectionMap.get(navEra)!;

    let subOrder: string[];
    if (navEra === 'Antiguidade') {
      subOrder = ANTIGUIDADE_ORDER.filter(e => subMap.has(e));
      // adicionar quaisquer outros que não estejam na ordem
      subMap.forEach((_, k) => { if (!subOrder.includes(k)) subOrder.push(k); });
    } else {
      subOrder = [navEra]; // era única = uma sub-seção com mesmo nome
    }

    eraSections.push({
      navEra,
      subSections: subOrder.map(name => ({
        name,
        items: subMap.get(name) || [],
      })),
    });
  });

  // eras restantes não presentes em ERA_ORDER
  eraSectionMap.forEach((subMap, navEra) => {
    if (!ERA_ORDER.includes(navEra)) {
      eraSections.push({
        navEra,
        subSections: [{ name: navEra, items: Array.from(subMap.values()).flat() }],
      });
    }
  });

  const getEraId = (name: string) =>
    name.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const [activeEra, setActiveEra] = useState(eraSections[0]?.navEra || '');

  // Intersection observer para destacar a era ativa na nav
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    eraSections.forEach((era) => {
      const el = document.getElementById(getEraId(era.navEra));
      if (el) {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveEra(era.navEra);
            }
          },
          { rootMargin: '-20% 0px -60% 0px' }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToEra = (navEra: string) => {
    const el = document.getElementById(getEraId(navEra));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getGridClass = (count: number) => {
    if (count === 1) return 'grid grid-cols-1 max-w-md mx-auto gap-8';
    if (count === 2) return 'grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-8';
    if (count === 4) return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
    return 'grid grid-cols-1 md:grid-cols-3 gap-8';
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 text-center bg-paper border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl text-ink font-bold mb-6 leading-tight">
                O Passado Codificado
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Não buscamos as origens do presente, mas a especificidade do passado. Um acervo digital para estudar como civilizações antigas organizaram a violência, o sagrado e a propriedade.
            </p>
        </div>
      </section>

      {/* Navegação rápida por eras */}
      <nav className="py-5 bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
            {eraSections.map((era) => (
              <li key={era.navEra}>
                <button
                  onClick={() => scrollToEra(era.navEra)}
                  className={`font-sans font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer pb-1 border-b-2 ${
                    activeEra === era.navEra
                      ? 'text-wine border-wine'
                      : 'text-gray-400 border-transparent hover:text-gray-600'
                  }`}
                >
                  {era.navEra}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Eras e Documentos */}
      {eraSections.map((era, eraIdx) => {
        const id = getEraId(era.navEra);
        const isAlt = eraIdx % 2 === 1;
        const hasSubSections = era.navEra === 'Antiguidade' && era.subSections.length > 1;

        return (
          <section
            key={era.navEra}
            id={id}
            className={`py-16 border-b border-gray-100 scroll-mt-16 ${isAlt ? 'bg-[#F5F2EA]' : 'bg-white'}`}
          >
            <div className="max-w-6xl mx-auto px-6">
              {/* Título principal da era */}
              <div className="flex items-center justify-center space-x-4 mb-12">
                <div className="h-px bg-gray-300 w-full max-w-[100px]"></div>
                <h2 className="font-sans font-bold text-sm tracking-[0.25em] text-wine uppercase whitespace-nowrap">
                  {era.navEra}
                </h2>
                <div className="h-px bg-gray-300 w-full max-w-[100px]"></div>
              </div>

              {hasSubSections ? (
                /* Sub-seções dentro de Antiguidade */
                <div className="space-y-16">
                  {era.subSections.map((sub) => (
                    <div key={sub.name}>
                      {/* Sub-título da civilização */}
                      <div className="flex items-center space-x-3 mb-8">
                        <div className="h-px bg-gray-200 w-8"></div>
                        <h3 className="font-sans text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                          {sub.name}
                        </h3>
                        <div className="h-px bg-gray-200 flex-1"></div>
                      </div>
                      <div className={getGridClass(sub.items.length)}>
                        {sub.items.map((item) =>
                          item.kind === 'document'
                            ? <DocumentCard key={item.data.id} document={item.data} />
                            : <CollectionCard key={item.data.id} collection={item.data} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Grid único para eras sem sub-divisão */
                <div className={getGridClass(era.subSections[0]?.items.length || 0)}>
                  {era.subSections[0]?.items.map((item) =>
                    item.kind === 'document'
                      ? <DocumentCard key={item.data.id} document={item.data} />
                      : <CollectionCard key={item.data.id} collection={item.data} />
                  )}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Quote */}
      <section className="py-24 bg-paper text-center px-6">
        <div className="max-w-4xl mx-auto">
            <blockquote className="font-display text-2xl md:text-3xl italic text-ink/80 leading-relaxed mb-8">
                "As leis são como teias de aranha: prendem os fracos e pequenos, mas são rasgadas pelos fortes e ricos."
            </blockquote>
            <cite className="font-sans text-sm font-bold tracking-widest text-gold-dark uppercase not-italic">
                — Anacarsis (Séc. VI a.C.)
            </cite>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import DocumentCard from '../components/DocumentCard';
import CollectionCard from '../components/CollectionCard';
import { documents } from '../data/documents';
import { collections } from '../data/collections';
import { HistoricalDocument, DocumentCollection } from '../types';

type EraItem =
  | { kind: 'document'; data: HistoricalDocument }
  | { kind: 'collection'; data: DocumentCollection };

const ERA_ORDER = ['Mesopotâmia', 'Egito Antigo', 'Grécia Antiga', 'Índia Antiga', 'Roma', 'Idade Média'];

const Home: React.FC = () => {
  // Agrupar documentos e coleções por era
  const eras: { name: string; items: EraItem[] }[] = [];

  // Adicionar documentos (excluindo sub-documentos de coleções)
  documents
    .filter(doc => !doc.parentCollectionId)
    .forEach((doc) => {
      const item: EraItem = { kind: 'document', data: doc };
      const existing = eras.find((e) => e.name === doc.era);
      if (existing) {
        existing.items.push(item);
      } else {
        eras.push({ name: doc.era, items: [item] });
      }
    });

  // Adicionar coleções nas eras correspondentes (excluindo sub-coleções)
  collections
    .filter(col => !col.parentCollectionId)
    .forEach((col) => {
      const item: EraItem = { kind: 'collection', data: col };
      const existing = eras.find((e) => e.name === col.era);
      if (existing) {
        existing.items.push(item);
      } else {
        eras.push({ name: col.era, items: [item] });
      }
    });

  // Ordenar eras conforme a ordem definida
  eras.sort((a, b) => {
    const ai = ERA_ORDER.indexOf(a.name);
    const bi = ERA_ORDER.indexOf(b.name);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  const getEraId = (name: string) =>
    name.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const [activeEra, setActiveEra] = useState(eras[0]?.name || '');

  // Intersection observer para destacar a era ativa
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    eras.forEach((era) => {
      const el = document.getElementById(getEraId(era.name));
      if (el) {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveEra(era.name);
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

  const scrollToEra = (eraName: string) => {
    const el = document.getElementById(getEraId(eraName));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Grid classes: adapta ao número de docs
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
            {eras.map((era) => (
              <li key={era.name}>
                <button
                  onClick={() => scrollToEra(era.name)}
                  className={`font-sans font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer pb-1 border-b-2 ${
                    activeEra === era.name
                      ? 'text-wine border-wine'
                      : 'text-gray-400 border-transparent hover:text-gray-600'
                  }`}
                >
                  {era.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Eras e Documentos */}
      {eras.map((era, eraIdx) => {
        const id = getEraId(era.name);
        const isAlt = eraIdx % 2 === 1;
        return (
          <section
            key={era.name}
            id={id}
            className={`py-16 border-b border-gray-100 scroll-mt-16 ${isAlt ? 'bg-[#F5F2EA]' : 'bg-white'}`}
          >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-center space-x-4 mb-12">
                    <div className="h-px bg-gray-300 w-full max-w-[100px]"></div>
                    <h2 className="font-sans font-bold text-sm tracking-[0.25em] text-wine uppercase whitespace-nowrap">
                        {era.name}
                    </h2>
                    <div className="h-px bg-gray-300 w-full max-w-[100px]"></div>
                </div>

                <div className={getGridClass(era.items.length)}>
                    {era.items.map((item) =>
                      item.kind === 'document'
                        ? <DocumentCard key={item.data.id} document={item.data} />
                        : <CollectionCard key={item.data.id} collection={item.data} />
                    )}
                </div>
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

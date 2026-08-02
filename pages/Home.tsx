import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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

const ERA_DATES: Record<string, string> = {
  'Antiguidade': 'c. 2100 a.C.',
  'Grécia Antiga': 'c. 621 a.C.',
  'Roma': 'c. 450 a.C.',
  'Idade Média': 'c. 507 d.C.',
  'Idade Contemporânea': '1776 d.C.',
};

const FEATURED_COLLECTIONS: { id: string; numeral: string }[] = [
  { id: 'corpus-iuris-civilis', numeral: 'I.' },
  { id: 'codigo-de-manu', numeral: 'II.' },
  { id: 'lei-salica', numeral: 'III.' },
  { id: 'livro-dos-mortos', numeral: 'IV.' },
];

const FEATURED_DOCUMENTS: { id: string; bigDate: string }[] = [
  { id: 'hamurabi', bigDate: '1754 a.C.' },
  { id: 'xii-tabuas', bigDate: '450 a.C.' },
  { id: 'dracon', bigDate: '621 a.C.' },
];

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

  // Reveal blur-to-sharp nas seções da landing
  useEffect(() => {
    const els = document.querySelectorAll('.focus-in');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToEra = (navEra: string) => {
    const el = document.getElementById(getEraId(navEra));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
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

  // Números do acervo
  const totalDocuments = documents.length;
  const totalCollections = collections.length;
  const totalEras = new Set(allItems.map((i) => i.realEra)).size;

  const featuredCollections = FEATURED_COLLECTIONS
    .map(({ id, numeral }) => {
      const col = collections.find((c) => c.id === id);
      return col ? { col, numeral } : null;
    })
    .filter((x): x is { col: DocumentCollection; numeral: string } => x !== null);

  const featuredDocuments = FEATURED_DOCUMENTS
    .map(({ id, bigDate }) => {
      const doc = documents.find((d) => d.id === id);
      return doc ? { doc, bigDate } : null;
    })
    .filter((x): x is { doc: HistoricalDocument; bigDate: string } => x !== null);

  const dropCap =
    'first-letter:font-display first-letter:font-bold first-letter:text-6xl first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-wine';

  return (
    <div className="flex flex-col min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative flex flex-col justify-center min-h-[92vh] px-6 pt-16 pb-0 bg-paper border-b border-gray-200">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-10 focus-in">
            <div className="h-px w-16 bg-gold"></div>
            <span className="font-sans font-black text-xs tracking-[0.42em] uppercase text-wine">
              Repositório de fontes primárias · História do Direito
            </span>
          </div>

          <h1 className="font-display font-bold text-ink text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight mb-10 focus-in">
            O passado,<br />
            <em className="italic font-normal text-wine">codificado</em>
            <span className="font-normal">.</span>
          </h1>

          <p className={`font-serif font-light text-lg md:text-xl text-gray-600 leading-loose max-w-xl md:ml-auto focus-in ${dropCap}`}>
            Não buscamos as origens do presente, mas a especificidade do passado.
            Um acervo digital de textos legislativos históricos — traduzidos e comentados —
            para estudar como civilizações antigas organizaram a violência, o sagrado e a propriedade.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 focus-in">
            <button
              onClick={() => scrollToId('acervo')}
              className="group inline-flex items-center gap-3 bg-wine text-white font-sans font-bold text-sm tracking-[0.14em] uppercase px-8 py-4 border border-wine hover:bg-[#6E232B] hover:border-[#6E232B] transition-colors duration-300 cursor-pointer"
            >
              Explorar o acervo
              <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollToId('colecoes')}
              className="inline-flex items-center gap-3 bg-transparent text-ink font-sans font-bold text-sm tracking-[0.14em] uppercase px-8 py-4 border border-ink hover:bg-ink hover:text-paper transition-colors duration-300 cursor-pointer"
            >
              Ver coleções
            </button>
          </div>
        </div>

        {/* Faixa cronológica das eras */}
        <nav aria-label="Linha do tempo das civilizações" className="mt-20 border-t border-[#D8D2C4] focus-in">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {eraSections.map((era) => (
              <button
                key={era.navEra}
                onClick={() => scrollToEra(era.navEra)}
                className="group relative flex flex-col justify-between text-left min-h-[110px] px-4 py-5 border-l border-[#D8D2C4] hover:bg-[#F5F2EA] transition-colors duration-300 cursor-pointer"
              >
                <span className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-gold rotate-45"></span>
                <span className="font-sans font-bold text-xs tracking-[0.18em] uppercase text-gray-500 group-hover:text-wine transition-colors">
                  {era.navEra}
                </span>
                <span className="font-display italic text-sm text-gold-dark mt-2">
                  {ERA_DATES[era.navEra] || ''}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </section>

      {/* ================= NÚMEROS ================= */}
      <section aria-label="O acervo em números" className="bg-[#161210] text-paper">
        <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="border-l border-gold/35 pl-6 focus-in">
            <span className="block font-display font-bold text-5xl lg:text-6xl leading-none text-gold">{totalDocuments}</span>
            <span className="block mt-3 font-sans font-semibold text-xs tracking-[0.22em] uppercase text-paper/70">Textos traduzidos</span>
          </div>
          <div className="border-l border-gold/35 pl-6 focus-in">
            <span className="block font-display font-bold text-5xl lg:text-6xl leading-none text-gold">{totalCollections}</span>
            <span className="block mt-3 font-sans font-semibold text-xs tracking-[0.22em] uppercase text-paper/70">Coleções</span>
          </div>
          <div className="border-l border-gold/35 pl-6 focus-in">
            <span className="block font-display font-bold text-5xl lg:text-6xl leading-none text-gold">{totalEras}</span>
            <span className="block mt-3 font-sans font-semibold text-xs tracking-[0.22em] uppercase text-paper/70">Civilizações</span>
          </div>
          <div className="border-l border-gold/35 pl-6 focus-in">
            <span className="block font-display font-bold text-5xl lg:text-6xl leading-none text-gold">
              2.900<span className="text-[0.45em] font-normal italic ml-1">anos</span>
            </span>
            <span className="block mt-3 font-sans font-semibold text-xs tracking-[0.22em] uppercase text-paper/70">De história do direito</span>
          </div>
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section className="py-28 px-6 bg-paper">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 focus-in">
            <span className="block font-sans font-black text-xs tracking-[0.42em] uppercase text-wine mb-6">O projeto</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight text-ink">
              As leis como <em className="italic font-normal text-wine">documentos</em> de uma civilização.
            </h2>
          </div>
          <div className="lg:col-span-7 focus-in">
            <p className={`font-serif font-light text-gray-600 leading-loose mb-6 ${dropCap}`}>
              Cada código aqui reunido é tratado como aquilo que é: um documento histórico.
              Antes de norma, é testemunho — de como uma sociedade definiu o crime, pôs preço
              ao corpo, distribuiu a terra e imaginou a justiça.
            </p>
            <p className="font-serif font-light text-gray-600 leading-loose">
              O Lei &amp; História reúne traduções comentadas de códigos, leis, éditos e
              compilações — da Mesopotâmia à Europa medieval — em português, com contexto
              histórico, glossários e aparato crítico. Não existe nada equivalente em nossa língua.
            </p>
            <div aria-hidden="true" className="text-center text-gold text-xl tracking-[0.6em] mt-8 select-none">⁂</div>
          </div>
        </div>
      </section>

      {/* ================= COLEÇÕES (índice editorial) ================= */}
      <section id="colecoes" className="py-24 px-6 bg-[#F5F2EA] scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-12 pb-6 border-b-2 border-ink focus-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink">Coleções</h2>
            <span className="font-serif italic text-gray-500">As grandes compilações, reunidas e organizadas</span>
          </div>

          {featuredCollections.map(({ col, numeral }) => {
            const subCount = collections.filter((c) => c.parentCollectionId === col.id).length;
            return (
              <Link
                key={col.id}
                to={`/colecao/${col.id}`}
                className="group relative grid grid-cols-[auto_1fr] gap-x-8 md:gap-x-12 items-baseline py-9 border-b border-[#D8D2C4] focus-in"
              >
                <span className="font-display italic text-2xl text-gold-dark min-w-12">{numeral}</span>
                <span className="block">
                  <h3 className="inline-block font-display font-bold text-2xl md:text-4xl leading-tight text-ink group-hover:text-wine group-hover:translate-x-2.5 transition-all duration-300">
                    {col.title}
                  </h3>
                  <span className="block font-serif italic text-gray-500 mt-1">{col.subtitle}</span>
                  <span className="block font-sans text-gray-600 leading-relaxed max-w-2xl mt-3 text-[0.95rem]">
                    {col.description}
                  </span>
                  <span className="flex flex-wrap gap-x-6 gap-y-1 mt-4">
                    <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-gold-dark">{col.era}</span>
                    <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-gray-400">{col.date}</span>
                    <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-gray-400">
                      {subCount > 0 ? `${subCount} sub-coleções · ` : ''}{col.childDocumentIds.length} textos
                    </span>
                  </span>
                </span>
                <ArrowRight
                  size={26}
                  className="absolute right-0 top-10 text-wine opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* ================= TEXTOS EM DESTAQUE ================= */}
      <section className="py-24 px-6 bg-paper">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-12 pb-6 border-b-2 border-ink focus-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink">Textos em destaque</h2>
            <span className="font-serif italic text-gray-500">Documentos avulsos do acervo</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {featuredDocuments.map(({ doc, bigDate }, idx) => (
              <Link
                key={doc.id}
                to={`/document/${doc.id}`}
                className={`group block focus-in ${idx === 1 ? 'md:mt-16' : ''} ${idx === 2 ? 'md:mt-32' : ''}`}
              >
                <span className="block font-display font-black text-5xl lg:text-6xl leading-none whitespace-nowrap text-transparent [-webkit-text-stroke:1.2px_#A07E45] group-hover:text-gold-dark group-hover:[-webkit-text-stroke:0px] transition-all duration-300">
                  {bigDate}
                </span>
                <h3 className="font-display font-bold text-2xl text-ink mt-5 group-hover:text-wine transition-colors">
                  {doc.title}
                </h3>
                <span className="block font-serif italic text-sm text-gray-500 mt-1">{doc.subtitle}</span>
                <span className="block w-11 h-0.5 bg-wine opacity-35 mt-4 group-hover:w-20 group-hover:opacity-100 transition-all duration-500"></span>
                <p className="font-sans text-sm text-gray-600 leading-relaxed mt-4">{doc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CITAÇÃO ================= */}
      <section className="relative overflow-hidden bg-wine text-paper py-28 px-6">
        <span aria-hidden="true" className="absolute -top-24 -left-6 font-display text-[22rem] leading-none text-white/10 pointer-events-none select-none">"</span>
        <div className="relative max-w-3xl mx-auto focus-in">
          <blockquote className="font-display italic text-2xl md:text-4xl leading-relaxed">
            As leis são como teias de aranha: prendem os fracos e pequenos,
            mas são rasgadas pelos fortes e ricos.
          </blockquote>
          <cite className="block mt-8 not-italic font-sans font-bold text-xs tracking-[0.34em] uppercase text-gold">
            — Anacarsis, séc. VI a.C.
          </cite>
        </div>
      </section>

      {/* ================= PARA QUEM É ================= */}
      <section className="py-24 px-6 bg-paper">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-12 pb-6 border-b-2 border-ink focus-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink">Para quem é</h2>
            <span className="font-serif italic text-gray-500">Um instrumento de estudo, não um museu</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            <div className="md:px-10 md:pl-0 focus-in">
              <span className="block font-sans font-bold text-xs tracking-[0.3em] uppercase text-gold-dark mb-4">01</span>
              <h3 className="font-display font-bold text-xl text-ink">Pesquisadores</h3>
              <p className="font-sans text-[0.95rem] text-gray-600 leading-relaxed mt-3">
                Fontes primárias completas, com numeração original dos dispositivos,
                indicação das traduções de referência e contexto histórico em cada introdução.
              </p>
            </div>
            <div className="md:px-10 md:border-l md:border-[#D8D2C4] focus-in">
              <span className="block font-sans font-bold text-xs tracking-[0.3em] uppercase text-gold-dark mb-4">02</span>
              <h3 className="font-display font-bold text-xl text-ink">Estudantes</h3>
              <p className="font-sans text-[0.95rem] text-gray-600 leading-relaxed mt-3">
                Textos acessíveis em português, com glossários de termos jurídicos antigos
                e introduções que explicam por que cada documento importa.
              </p>
            </div>
            <div className="md:px-10 md:border-l md:border-[#D8D2C4] focus-in">
              <span className="block font-sans font-bold text-xs tracking-[0.3em] uppercase text-gold-dark mb-4">03</span>
              <h3 className="font-display font-bold text-xl text-ink">Professores</h3>
              <p className="font-sans text-[0.95rem] text-gray-600 leading-relaxed mt-3">
                Material pronto para sala de aula: coleções organizadas por civilização,
                tabelas de equivalências e leituras comentadas para discussão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACERVO COMPLETO ================= */}
      <div id="acervo" className="scroll-mt-0">
        <div className="py-20 px-6 bg-[#161210] text-paper text-center">
          <span className="block font-sans font-black text-xs tracking-[0.42em] uppercase text-gold mb-6 focus-in">Catálogo completo</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight focus-in">
            O acervo, <em className="italic font-normal text-gold">era por era</em>.
          </h2>
        </div>

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
      </div>
    </div>
  );
};

export default Home;

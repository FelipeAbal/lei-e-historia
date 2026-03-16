import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Menu, X } from 'lucide-react';
import { collections } from '../data/collections';
import { documents } from '../data/documents';
import { HistoricalDocument, DocumentCollection } from '../types';
import DocumentCard from '../components/DocumentCard';
import CollectionCard from '../components/CollectionCard';
import { renderMarkdown } from '../utils/renderMarkdown';

type ChildItem =
  | { kind: 'document'; data: HistoricalDocument }
  | { kind: 'collection'; data: DocumentCollection };

const CollectionHub: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const collection = collections.find(c => c.id === id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!collection) {
    return <Navigate to="/" replace />;
  }

  // Resolve children: can be documents or sub-collections
  const childItems: ChildItem[] = collection.childDocumentIds
    .map((childId): ChildItem | null => {
      const doc = documents.find(d => d.id === childId);
      if (doc) return { kind: 'document', data: doc };
      const col = collections.find(c => c.id === childId);
      if (col) return { kind: 'collection', data: col };
      return null;
    })
    .filter(Boolean) as ChildItem[];

  // Parent collection navigation
  const parentCollection = collection.parentCollectionId
    ? collections.find(c => c.id === collection.parentCollectionId)
    : null;

  const backTo = parentCollection ? `/colecao/${parentCollection.id}` : '/';
  const backLabel = parentCollection ? parentCollection.title : 'Voltar';

  const getGridClass = (count: number) => {
    if (count === 1) return 'grid grid-cols-1 max-w-md mx-auto gap-8';
    if (count === 2) return 'grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-8';
    if (count === 4) return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
    return 'grid grid-cols-1 md:grid-cols-3 gap-8';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-paper min-h-screen">
      {/* Sticky Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link to={backTo} className="flex items-center text-gray-500 hover:text-wine transition-colors text-sm font-bold uppercase tracking-wide group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {backLabel}
          </Link>
          <div className="text-center hidden md:block">
            <h2 className="font-display font-bold text-ink">{collection.title}</h2>
            <span className="text-xs font-serif italic text-gold-dark">{collection.date}</span>
          </div>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center text-gray-500 hover:text-wine transition-colors text-sm font-bold uppercase tracking-wide"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="ml-2">Índice</span>
          </button>
          <div className="w-20 hidden md:block"></div>
        </div>

        {/* Mobile nav drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 max-h-[60vh] overflow-y-auto">
            <ul className="space-y-3 font-serif text-sm">
              {collection.sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="text-left text-gray-600 hover:text-wine transition-all block w-full py-1"
                  >
                    {section.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('documentos')}
                  className="text-left text-gray-600 hover:text-wine transition-all block w-full py-1"
                >
                  Documentos
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row gap-12">

        {/* Sidebar — desktop only */}
        <aside className="hidden md:block md:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="mb-8">
              <h3 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Índice</h3>
              <nav>
                <ul className="space-y-3 font-serif text-sm">
                  {collection.sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className="text-left text-gray-600 hover:text-wine hover:underline decoration-wine/30 transition-all block w-full"
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => scrollToSection('documentos')}
                      className="text-left text-gray-600 hover:text-wine hover:underline decoration-wine/30 transition-all block w-full"
                    >
                      Documentos
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-sm">
              <div className="flex items-center text-wine mb-3">
                <BookOpen size={16} className="mr-2"/>
                <span className="text-xs font-bold uppercase tracking-wide">Ficha Técnica</span>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-500 leading-relaxed font-sans">
                  <strong className="text-ink">Era:</strong> {collection.era}
                </p>
                {collection.language && (
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    <strong className="text-ink">Língua Original:</strong> {collection.language}
                  </p>
                )}
                <p className="text-xs text-gray-500 leading-relaxed font-sans">
                  <strong className="text-ink">Obras:</strong> {childItems.length}
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <article className="flex-grow max-w-[700px] mx-auto md:mx-0">
          <header className="mb-12 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-wine/10 text-wine text-xs font-bold tracking-widest uppercase mb-4">
              {collection.era} · {collection.date}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
              {collection.title}
            </h1>
            <p className="font-serif text-xl italic text-gray-500">
              {collection.subtitle}
            </p>
          </header>

          <div className="space-y-16">
            {collection.sections.map((section, sectionIdx) => (
              <section id={section.id} key={section.id} className="scroll-mt-32">
                <h2 className="font-display text-2xl text-ink border-b-2 border-gold/30 pb-2 mb-6 inline-block pr-8">
                  {section.title}
                </h2>
                <div className="prose prose-lg prose-p:font-serif prose-p:text-gray-700 prose-p:leading-loose">
                  {section.content.split('\n\n').map((paragraph, idx) => {
                    const hasHeading = /^\\?#{1,4}\s/.test(paragraph.split('\n')[0]);
                    if (hasHeading) {
                      return <div key={idx} className="mb-6">{renderMarkdown(paragraph)}</div>;
                    }
                    return (
                      <p key={idx} className={`mb-6 ${sectionIdx === 0 && idx === 0 ? 'first-letter:text-5xl first-letter:font-display first-letter:text-wine first-letter:float-left first-letter:mr-2 first-letter:mt-[-10px]' : ''}`}>
                        {renderMarkdown(paragraph)}
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>

      {/* Child Items */}
      <section id="documentos" className="py-16 px-6 bg-[#F5F2EA] border-t border-gray-100 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="h-px bg-gray-300 w-full max-w-[100px]"></div>
            <h2 className="font-sans font-bold text-sm tracking-[0.25em] text-wine uppercase whitespace-nowrap">
              Documentos
            </h2>
            <div className="h-px bg-gray-300 w-full max-w-[100px]"></div>
          </div>

          <div className={getGridClass(childItems.length)}>
            {childItems.map((item) =>
              item.kind === 'document'
                ? <DocumentCard key={item.data.id} document={item.data} />
                : <CollectionCard key={item.data.id} collection={item.data} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionHub;

import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { documents } from '../data/documents';
import { collections } from '../data/collections';
import { ArrowLeft, BookOpen, Menu, X } from 'lucide-react';
import { renderMarkdown } from '../utils/renderMarkdown';

const DocumentReader: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const docData = documents.find(doc => doc.id === id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!docData) {
    return <Navigate to="/" replace />;
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const totalArticles = docData.sections.reduce((acc, s) => {
    return acc + (s.articles ? s.articles.length : 0);
  }, 0);
  const firstArticle = docData.sections.flatMap(s => s.articles ?? []).find(Boolean);
  const articleLabel = firstArticle?.number?.startsWith('Verso') ? 'Versos' : 'Dispositivos';

  const parentCollection = docData.parentCollectionId
    ? collections.find(c => c.id === docData.parentCollectionId)
    : null;

  const backTo = parentCollection ? `/colecao/${parentCollection.id}` : '/';
  const backLabel = parentCollection ? parentCollection.title : 'Voltar';

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
                    <h2 className="font-display font-bold text-ink">{docData.title}</h2>
                    <span className="text-xs font-serif italic text-gold-dark">{docData.date}</span>
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
                  {docData.sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className="text-left text-gray-600 hover:text-wine transition-all block w-full py-1"
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>

        <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row gap-12">

            {/* Sidebar — desktop only */}
            <aside className="hidden md:block md:w-64 flex-shrink-0">
                <div style={{ position: 'sticky', top: '8rem', maxHeight: 'calc(100vh - 10rem)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ overflowY: 'auto', flex: '1 1 0%', minHeight: 0, paddingRight: '0.5rem' }}>
                        <h3 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Índice</h3>
                        <nav>
                            <ul className="space-y-3 font-serif text-sm">
                                {docData.sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className="text-left text-gray-600 hover:text-wine hover:underline decoration-wine/30 transition-all block w-full"
                                        >
                                            {section.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div style={{ flexShrink: 0 }} className="p-6 bg-white border border-gray-100 rounded-sm">
                        <div className="flex items-center text-wine mb-3">
                            <BookOpen size={16} className="mr-2"/>
                            <span className="text-xs font-bold uppercase tracking-wide">Ficha Técnica</span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-gray-500 leading-relaxed font-sans">
                              <strong className="text-ink">Era:</strong> {docData.era}
                          </p>
                          {docData.language && (
                            <p className="text-xs text-gray-500 leading-relaxed font-sans">
                                <strong className="text-ink">Língua Original:</strong> {docData.language}
                            </p>
                          )}
                          {totalArticles > 0 && (
                            <p className="text-xs text-gray-500 leading-relaxed font-sans">
                                <strong className="text-ink">{articleLabel}:</strong> {totalArticles}
                            </p>
                          )}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <article className="flex-grow max-w-[700px] mx-auto md:mx-0">
                <header className="mb-12 text-center md:text-left">
                    <span className="inline-block px-3 py-1 bg-wine/10 text-wine text-xs font-bold tracking-widest uppercase mb-4">
                        {docData.era} · {docData.date}
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
                        {docData.title}
                    </h1>
                    <p className="font-serif text-xl italic text-gray-500">
                        {docData.subtitle}
                    </p>
                </header>

                <div className="space-y-16">
                    {docData.sections.map((section) => (
                        <section id={section.id} key={section.id} className="scroll-mt-32">
                            <h2 className="font-display text-2xl text-ink border-b-2 border-gold/30 pb-2 mb-6 inline-block pr-8">
                                {section.title}
                            </h2>

                            {/* TEXT */}
                            {section.type === 'text' && section.content && (
                                <div className="prose prose-lg prose-p:font-serif prose-p:text-gray-700 prose-p:leading-loose">
                                    {section.content.split('\n\n').map((paragraph, idx) => {
                                        const hasHeading = /^\\?#{1,4}\s/.test(paragraph.split('\n')[0]);
                                        if (hasHeading) {
                                            return <div key={idx} className="mb-6">{renderMarkdown(paragraph)}</div>;
                                        }
                                        return (
                                            <p key={idx} className={`mb-6 ${idx === 0 ? 'first-letter:text-5xl first-letter:font-display first-letter:text-wine first-letter:float-left first-letter:mr-2 first-letter:mt-[-10px]' : ''}`}>
                                                {renderMarkdown(paragraph)}
                                            </p>
                                        );
                                    })}
                                </div>
                            )}

                            {/* ARTICLES */}
                            {section.type === 'articles' && section.articles && (
                                <div className="space-y-8">
                                    {section.articles.map((article) => (
                                        <div key={article.id} className="flex gap-4 p-6 bg-white border-l-4 border-wine shadow-sm hover:bg-gray-50 transition-colors">
                                            <div className="flex-shrink-0">
                                                <span className="font-display font-bold text-xl text-wine">{article.number}</span>
                                            </div>
                                            <div className="space-y-3">
                                                {article.text.split('\n\n').map((paragraph, pIdx) => {
                                                    const hasHeading = /^\\?#{1,4}\s/.test(paragraph.split('\n')[0]);
                                                    if (hasHeading) {
                                                        return <div key={pIdx} className="font-sans text-ink leading-relaxed">{renderMarkdown(paragraph)}</div>;
                                                    }
                                                    return (
                                                        <p key={pIdx} className="font-sans text-lg text-ink leading-relaxed">
                                                            {renderMarkdown(paragraph)}
                                                        </p>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* TABLE */}
                            {section.type === 'table' && section.tableData && (
                                <div className="overflow-hidden border border-gray-200 rounded-sm shadow-sm">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr>
                                                <th className="py-4 px-6 bg-[#F5F2EA] text-left text-xs font-bold uppercase tracking-widest text-gold-dark border-b border-gold/20">Mercadoria / Serviço</th>
                                                <th className="py-4 px-6 bg-[#F5F2EA] text-right text-xs font-bold uppercase tracking-widest text-gold-dark border-b border-gold/20">Valor / Equivalência</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {section.tableData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="py-4 px-6 font-serif text-ink italic">{row.item}</td>
                                                    <td className="py-4 px-6 text-right font-sans font-bold text-wine">{row.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {/* GLOSSARY */}
                            {section.type === 'glossary' && section.glossaryEntries && (
                                <div className="divide-y divide-gray-100 border border-gray-200">
                                    {section.glossaryEntries.map((entry, idx) => (
                                        <div key={idx} className="flex gap-4 px-6 py-4 bg-white hover:bg-gray-50 transition-colors">
                                            <dt className="flex-shrink-0 w-48 font-display font-bold text-wine text-sm leading-relaxed pt-0.5">
                                                {entry.term}
                                            </dt>
                                            <dd className="font-serif text-gray-700 leading-relaxed text-sm">
                                                {entry.definition}
                                            </dd>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </article>
        </main>
    </div>
  );
};

export default DocumentReader;

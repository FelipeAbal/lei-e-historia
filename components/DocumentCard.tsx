import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HistoricalDocument } from '../types';

interface DocumentCardProps {
  document: HistoricalDocument;
}

const getArticleLabel = (sections: HistoricalDocument['sections']): string => {
  const firstArticle = sections.flatMap(s => s.articles ?? []).find(Boolean);
  if (firstArticle?.number?.startsWith('Verso')) return 'versos';
  return 'dispositivos';
};

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const totalArticles = document.sections.reduce((acc, s) => {
    return acc + (s.articles ? s.articles.length : 0);
  }, 0);
  const articleLabel = getArticleLabel(document.sections);

  return (
    <Link to={`/document/${document.id}`} className="group block h-full">
      <div className="bg-white border border-gray-200 p-8 h-full flex flex-col shadow-sm hover:shadow-xl hover:border-wine/30 transition-all duration-300 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#FDFBF7] -mr-8 -mt-8 rotate-45 border-b border-l border-gold/30"></div>

        <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-paper border border-gold/30 text-gold-dark text-xs font-bold tracking-widest uppercase">
                  {document.date}
              </span>
              {totalArticles > 0 && (
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-500 text-xs font-sans font-semibold">
                  {totalArticles} {articleLabel}
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl text-ink font-bold mb-2 group-hover:text-wine transition-colors">
                {document.title}
            </h3>
            <p className="font-serif italic text-gray-500 text-sm mb-4">
                {document.subtitle}
            </p>
            <div className="w-12 h-0.5 bg-wine opacity-20 group-hover:opacity-100 group-hover:w-20 transition-all duration-300"></div>
        </div>

        <p className="font-sans text-gray-600 leading-relaxed text-sm mb-8 flex-grow">
            {document.description}
        </p>

        <div className="flex items-center text-wine font-bold text-sm tracking-wide uppercase mt-auto">
            <span className="mr-2">Ler Documento</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default DocumentCard;

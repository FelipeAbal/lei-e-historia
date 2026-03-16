import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Library } from 'lucide-react';
import { DocumentCollection } from '../types';

interface CollectionCardProps {
  collection: DocumentCollection;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <Link to={`/colecao/${collection.id}`} className="group block h-full">
      <div className="bg-white border border-gray-200 p-8 h-full flex flex-col shadow-sm hover:shadow-xl hover:border-wine/30 transition-all duration-300 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#FDFBF7] -mr-8 -mt-8 rotate-45 border-b border-l border-gold/30"></div>

        <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-paper border border-gold/30 text-gold-dark text-xs font-bold tracking-widest uppercase">
                  {collection.date}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-wine/10 text-wine text-xs font-sans font-semibold">
                <Library size={12} />
                {collection.childDocumentIds.length} obras
              </span>
            </div>
            <h3 className="font-display text-2xl text-ink font-bold mb-2 group-hover:text-wine transition-colors">
                {collection.title}
            </h3>
            <p className="font-serif italic text-gray-500 text-sm mb-4">
                {collection.subtitle}
            </p>
            <div className="w-12 h-0.5 bg-wine opacity-20 group-hover:opacity-100 group-hover:w-20 transition-all duration-300"></div>
        </div>

        <p className="font-sans text-gray-600 leading-relaxed text-sm mb-8 flex-grow">
            {collection.description}
        </p>

        <div className="flex items-center text-wine font-bold text-sm tracking-wide uppercase mt-auto">
            <span className="mr-2">Explorar Coleção</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;

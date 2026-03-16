import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-paper border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center">
        <Link to="/" className="text-center group">
          <h1 className="font-display text-4xl text-ink font-bold tracking-tight mb-2 group-hover:text-wine transition-colors duration-300">
            Lei & História
          </h1>
          <div className="h-px w-24 bg-wine mx-auto opacity-60 group-hover:w-36 transition-all duration-500"></div>
        </Link>
        <nav className="mt-4">
          <ul className="flex space-x-8 text-sm font-sans font-semibold tracking-widest uppercase text-gray-500">
            <li><Link to="/" className="hover:text-wine transition-colors">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-wine transition-colors">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-wine transition-colors">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

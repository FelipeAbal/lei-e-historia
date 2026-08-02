import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const today = new Date();
  const accessDate = today.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const citation = `ABAL, Felipe Cittolin. Lei e História. Disponível em: leiehistoria.com.br. Acesso em: ${accessDate}.`;

  return (
    <footer className="w-full bg-[#F5F2EA] border-t border-gold/20 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="font-display text-lg text-ink mb-1">Lei & História</h3>
          <p className="font-serif italic text-xs">A preservação da justiça através dos tempos.</p>
        </div>
        <div className="flex space-x-6 tracking-widest uppercase text-xs">
          <Link to="/sobre" className="hover:text-wine transition-colors">Sobre</Link>
          <Link to="/contato" className="hover:text-wine transition-colors">Contato</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 border-t border-gold/10 pt-6">
        <p className="text-xs text-gray-400 font-sans text-center">
          <span className="font-semibold text-gray-500 uppercase tracking-widest text-[10px]">Como citar</span>
          <br />
          <span className="font-serif italic">{citation}</span>
        </p>
      </div>
      <div className="text-center mt-6 text-xs text-gray-400 font-sans">
        &copy; {new Date().getFullYear()} Lei e História. Digital Humanities Project.
      </div>
    </footer>
  );
};

export default Footer;

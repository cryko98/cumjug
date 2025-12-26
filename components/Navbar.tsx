
import React from 'react';
import { LOGO_URL, TICKER, X_LINK, X_ICON, BUY_LINK } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-2xl border border-blue-600/10 px-6 py-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <img src={LOGO_URL} alt="CUMJUG" className="w-10 h-10 rounded-full border-2 border-blue-600/20" />
        <span className="font-bangers text-2xl tracking-wider text-blue-600">CUMJUG</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-black uppercase tracking-widest text-blue-700">
        <a href="#about" className="hover:text-blue-500 transition-colors">Lore</a>
        <a href="#meme-gen" className="hover:text-blue-500 transition-colors">Generator</a>
        <a href="#stats" className="hover:text-blue-500 transition-colors">Contract</a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href={X_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
        >
          {X_ICON}
        </a>
        <a 
          href={BUY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-black text-sm hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)]"
        >
          BUY $CUMJUG
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

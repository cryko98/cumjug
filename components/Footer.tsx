
import React from 'react';
import { LOGO_URL, TICKER, X_LINK, X_ICON, DEX_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 bg-white relative overflow-hidden border-t border-blue-100">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8 p-1 bg-blue-50 rounded-full shadow-inner">
          <img src={LOGO_URL} alt="CUMJUG" className="w-20 h-20 rounded-full border-4 border-white shadow-xl" />
        </div>
        
        <h3 className="font-bangers text-5xl mb-3 text-blue-600 drop-shadow-sm">CUMJUG</h3>
        <p className="text-blue-800 font-black mb-12 uppercase tracking-[0.4em] text-[10px]">The Liquid Gold of the Solana Ecosystem</p>
        
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          <a href={X_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all shadow-lg active:scale-95">
            {X_ICON}
            <span className="font-black uppercase text-xs tracking-widest">Twitter / X</span>
          </a>
          <a href={DEX_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-50 transition-all active:scale-95">
            <span className="font-black uppercase text-xs tracking-widest">DexScreener</span>
          </a>
        </div>

        <div className="max-w-3xl bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-100 text-blue-900 text-[11px] font-black uppercase tracking-[0.2em] leading-relaxed">
            Disclaimer: $CUMJUG is a community-driven memecoin created for entertainment and meme-generating purposes only. 
            It has no intrinsic value or expectation of financial gain.
        </div>

        <div className="mt-16 text-blue-900/30 text-[9px] font-black uppercase tracking-[0.5em]">
          © 2024 CUMJUG LORE FOUNDATION • ESTABLISHED ON SOLANA
        </div>
      </div>
    </footer>
  );
};

export default Footer;

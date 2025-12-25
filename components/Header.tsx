
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-[#0055FF]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://pbs.twimg.com/profile_images/2003851751129038848/mwq0fRWc_400x400.jpg" 
            alt="CUMJUG Logo" 
            className="w-12 h-12 rounded-full border-2 border-[#0055FF]"
          />
          <span className="font-heading text-2xl tracking-tighter hidden sm:block">CUMJUG</span>
        </div>
        
        <nav className="flex items-center gap-6 font-bold text-sm sm:text-base">
          <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#generator" className="hover:underline">GENERATE</a>
          <a href="#chart" className="hover:underline">CHART</a>
          <a 
            href="https://pump.fun/2xREaVTYZXSmC3CtoxvJwEJcYZs9FudfkUYz8GCPpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0055FF] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform active:scale-95"
          >
            BUY NOW
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

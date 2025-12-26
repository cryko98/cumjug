
import React from 'react';
import { LOGO_URL, TICKER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8 inline-block animate-bounce-slow">
          <img 
            src={LOGO_URL} 
            alt="CUMJUG Logo" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-blue-600/10 shadow-[0_0_80px_rgba(37,99,235,0.1)] mx-auto"
          />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bangers mb-4 tracking-tighter text-blue-600 drop-shadow-[0_5px_15px_rgba(37,99,235,0.2)]">
          CUMJUG
        </h1>
        
        <p className="text-xl md:text-3xl font-black text-blue-900/80 mb-8 italic">
          "The Jug is finally full. Are you ready?"
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-8 py-4 bg-blue-600 text-white font-black text-2xl rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform cursor-default shadow-xl">
            {TICKER}
          </div>
          <div className="px-8 py-4 bg-white text-blue-600 font-black text-2xl rounded-2xl transform rotate-2 hover:rotate-0 transition-transform cursor-default border-4 border-blue-600/20 shadow-xl">
            JUG POWER
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

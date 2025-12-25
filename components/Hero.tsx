
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="relative group cursor-pointer mb-8">
        <div className="absolute -inset-4 bg-[#0055FF]/10 rounded-full blur-xl group-hover:bg-[#0055FF]/20 transition-all"></div>
        <img 
          src="https://pbs.twimg.com/profile_images/2003851751129038848/mwq0fRWc_400x400.jpg" 
          alt="CUMJUG" 
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-[#0055FF] shadow-2xl transition-transform group-hover:scale-105"
        />
      </div>
      
      <h1 className="font-heading text-6xl md:text-8xl mb-4 tracking-tighter">
        $CUMJUG
      </h1>
      
      <p className="max-w-2xl text-xl md:text-2xl font-bold mb-8 text-[#0055FF]/80">
        THE ONLY JUG YOU'LL EVER NEED. FILLED OVER A DECADE OF PURE DEDICATION.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="https://pump.fun/2xREaVTYZXSmC3CtoxvJwEJcYZs9FudfkUYz8GCPpump" 
          target="_blank" 
          className="bg-[#0055FF] text-white text-2xl font-heading px-12 py-6 rounded-2xl hover:bg-blue-600 transition-colors shadow-lg hover:shadow-[#0055FF]/50"
        >
          BUY ON PUMP.FUN
        </a>
        <a 
          href="https://x.com/cumjugonsol" 
          target="_blank" 
          className="bg-white border-4 border-[#0055FF] text-[#0055FF] p-6 rounded-2xl hover:bg-[#0055FF] hover:text-white transition-all flex items-center justify-center"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </a>
      </div>

      <div className="mt-12 p-4 bg-blue-50 border-2 border-dashed border-[#0055FF] rounded-xl inline-block select-all font-mono">
        ca: 2xREaVTYZXSmC3CtoxvJwEJcYZs9FudfkUYz8GCPpump
      </div>
    </section>
  );
};

export default Hero;

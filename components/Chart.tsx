
import React from 'react';

const Chart: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h2 className="font-heading text-5xl mb-4 uppercase">Thickest Charts Only</h2>
        <p className="text-xl">Watch the $CUMJUG fill up the order books.</p>
      </div>
      
      <div className="bg-white border-8 border-[#0055FF] rounded-[2rem] overflow-hidden shadow-2xl h-[600px] relative">
        {/* Replace with actual pair address when available */}
        <iframe 
          src="https://dexscreener.com/solana/2xREaVTYZXSmC3CtoxvJwEJcYZs9FudfkUYz8GCPpump?embed=1&theme=light&trades=0&info=0" 
          className="w-full h-full border-none"
          title="Dexscreener Chart"
        ></iframe>
      </div>
      
      <div className="mt-8 flex justify-center">
        <a 
          href="https://pump.fun/2xREaVTYZXSmC3CtoxvJwEJcYZs9FudfkUYz8GCPpump" 
          target="_blank" 
          className="bg-[#0055FF] text-white px-12 py-6 rounded-full font-heading text-3xl shadow-xl hover:scale-110 transition-transform"
        >
          PUMP IT NOW
        </a>
      </div>
    </div>
  );
};

export default Chart;

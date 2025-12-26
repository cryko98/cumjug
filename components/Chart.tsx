
import React from 'react';

const Chart: React.FC = () => {
  return (
    <section id="chart" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="font-bangers text-5xl text-blue-600 tracking-tight">LIVE MARKET VIBES</h2>
          <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Real-time Trading Feed</span>
          </div>
        </div>
        
        <div className="rounded-[3rem] overflow-hidden border-4 border-blue-600/10 shadow-2xl bg-white relative">
          <style>{`
            #dexscreener-embed {
              position: relative;
              width: 100%;
              padding-bottom: 125%;
            }
            @media(min-width:1400px) {
              #dexscreener-embed {
                padding-bottom: 65%;
              }
            }
            #dexscreener-embed iframe {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              border: 0;
            }
          `}</style>
          <div id="dexscreener-embed">
            <iframe 
              src="https://dexscreener.com/solana/8xd2447u62gXzAmqzQUL6vvjU9Lun5HbAy5DLMycNatj?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=light&chartStyle=0&chartType=usd&interval=15"
              title="DexScreener Chart"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-8 text-center text-blue-900/40 text-[10px] font-black uppercase tracking-[0.3em]">
          Data provided by DexScreener • $CUMJUG Liquidity is Locked
        </div>
      </div>
    </section>
  );
};

export default Chart;

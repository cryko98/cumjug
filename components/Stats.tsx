
import React, { useState } from 'react';
import { CA, COPY_ICON } from '../constants';

const Stats: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="stats" className="py-12 px-6">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 border border-blue-600/10 shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-blue-600/60 font-bold uppercase tracking-widest text-sm mb-2">Contract Address</h2>
          <div className="flex items-center justify-center gap-2 group">
            <code className="text-blue-700 text-lg md:text-2xl font-mono bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 break-all max-w-full">
              {CA}
            </code>
            <button 
              onClick={copyToClipboard}
              className="p-3 bg-blue-600 text-white rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              {copied ? (
                <span className="text-xs font-bold px-2">COPIED!</span>
              ) : COPY_ICON}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="text-blue-600/40 text-xs font-bold mb-1 uppercase tracking-wider">Supply</div>
            <div className="text-xl font-bold text-blue-700">1 BILLION</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="text-blue-600/40 text-xs font-bold mb-1 uppercase tracking-wider">Burned</div>
            <div className="text-xl font-bold text-blue-700">100% LP</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="text-blue-600/40 text-xs font-bold mb-1 uppercase tracking-wider">Tax</div>
            <div className="text-xl font-bold text-blue-700">0%</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="text-blue-600/40 text-xs font-bold mb-1 uppercase tracking-wider">Fill Status</div>
            <div className="text-xl font-bold text-blue-500">MAXED</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

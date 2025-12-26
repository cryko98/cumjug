
import React, { useState, useRef } from 'react';
import { GeneratedMeme } from '../types';
import { generateMemeImage, randomMemePrompts } from '../services/gemini';

const MemeGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentMeme, setCurrentMeme] = useState<GeneratedMeme | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const resultRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async (customPrompt?: string) => {
    const activePrompt = customPrompt || prompt || randomMemePrompts[Math.floor(Math.random() * randomMemePrompts.length)];
    setIsGenerating(true);
    setError(null);
    
    try {
      // Ez már a Pollinations linket adja vissza
      const url = await generateMemeImage(activePrompt);
      
      // Megvárjuk, amíg a kép ténylegesen letöltődik a böngészőbe a jobb UX érdekében
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setCurrentMeme({ url, prompt: activePrompt, timestamp: Date.now() });
        setIsGenerating(false);
        if (!customPrompt) setPrompt('');
        setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
      };
      img.onerror = () => {
        setError("A generáló szerver nem válaszol. Próbáld újra!");
        setIsGenerating(false);
      };
    } catch (err: any) {
      setError("Hiba történt a JUG generálása közben.");
      setIsGenerating(false);
    }
  };

  return (
    <section id="meme-gen" className="py-24 px-6 relative bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bangers mb-6 text-blue-600 tracking-wide uppercase">The Filling Station</h2>
          <p className="text-blue-800/60 text-xs font-black uppercase tracking-[0.5em]">Powered by Pollinations • No API Key Required</p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-blue-600/20 shadow-xl mb-12 bg-white">
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Írd le a jelenetet a CUMJUG-gal... (pl. 'Elon Musk holds the jug on Mars')"
            className="w-full bg-white border border-blue-200 rounded-2xl p-6 text-blue-800 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 min-h-[140px] resize-none mb-6 shadow-inner font-medium"
          />
          <div className="flex justify-end items-center gap-4">
            <button 
              onClick={() => handleGenerate()}
              disabled={isGenerating}
              className={`px-12 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl text-xs uppercase tracking-[0.3em] ${isGenerating ? 'opacity-50 cursor-not-allowed animate-pulse' : 'hover:scale-105 active:scale-95'}`}
            >
              {isGenerating ? 'FILLING JUG...' : 'GENERATE VISION'}
            </button>
          </div>
          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-500 text-xs font-bold uppercase rounded-xl border border-red-100">
              {error}
            </div>
          )}
        </div>

        <div ref={resultRef} className="scroll-mt-32">
          {currentMeme && (
            <div className={`glass-card rounded-[3.5rem] overflow-hidden border border-blue-200 shadow-2xl bg-white transition-opacity duration-500 ${isGenerating ? 'opacity-50' : 'opacity-100'}`}>
              <div className="relative aspect-square bg-blue-50">
                <img 
                  src={currentMeme.url} 
                  alt="Generated Vision" 
                  className="w-full h-full object-cover"
                />
                {isGenerating && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              <div className="p-8 text-center">
                <p className="font-bold italic text-blue-900 mb-4">"{currentMeme.prompt}"</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href={currentMeme.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[10px] font-black uppercase tracking-widest text-blue-600 border-b-2 border-blue-600/20 hover:border-blue-600 transition-all"
                  >
                    Open Original
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MemeGenerator;

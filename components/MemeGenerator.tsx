
import React, { useState } from 'react';
import { generateMeme } from '../services/gemini';

const PRESETS = [
  "A CUMJUG sitting on top of a mountain during sunrise",
  "A group of astronauts celebrating with a CUMJUG on the moon",
  "A CUMJUG wearing sunglasses at a beach party",
  "A giant CUMJUG being worshiped by tiny monkeys",
  "A futuristic cyberpunk city powered by a giant CUMJUG"
];

const MemeGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async (p?: string) => {
    const activePrompt = p || prompt;
    if (!activePrompt) {
      alert("Please enter a prompt to fill the jug!");
      return;
    }

    setLoading(true);
    try {
      const img = await generateMeme(activePrompt);
      if (img) {
        setResult(img);
      } else {
        // Error handling is mostly done inside generateMeme, 
        // but we can provide a fallback UI message here if needed.
      }
    } catch (err) {
      console.error("Generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0055FF] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-5xl mb-4">AI JUG GENERATOR</h2>
          <p className="text-xl">Describe your dream jug and we'll fill it with cum using Gemini AI.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white text-[#0055FF] p-8 rounded-[3rem] shadow-2xl border-b-8 border-blue-900">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <div>
                <label className="block font-bold mb-2 uppercase tracking-wide">Whatcha wanna see?</label>
                <textarea 
                  className="w-full p-4 border-4 border-[#0055FF] rounded-2xl focus:outline-none focus:ring-4 ring-blue-200 text-lg min-h-[120px] transition-all"
                  placeholder="e.g. A CUMJUG floating in deep space next to a galaxy..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-2">
                <button 
                  onClick={() => handleGenerate()}
                  disabled={loading}
                  className="bg-[#0055FF] text-white font-heading py-4 rounded-xl hover:bg-blue-600 transition-all disabled:opacity-50 active:scale-95"
                >
                  {loading ? 'FILLING THE JUG...' : 'GENERATE JUG'}
                </button>
                <button 
                  onClick={() => {
                    const rand = PRESETS[Math.floor(Math.random() * PRESETS.length)];
                    setPrompt(rand);
                    handleGenerate(rand);
                  }}
                  disabled={loading}
                  className="bg-white border-4 border-[#0055FF] text-[#0055FF] font-bold py-2 rounded-xl hover:bg-blue-50 transition-all active:scale-95"
                >
                  RANDOM MEME
                </button>
              </div>

              <div className="pt-4">
                <p className="text-xs opacity-60 font-bold uppercase mb-2">Reference Style:</p>
                <img 
                  src="https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/Gemini_Generated_Image_fgj3y8fgj3y8fgj3.png" 
                  className="w-20 h-20 rounded-lg border-2 border-[#0055FF] object-cover" 
                  alt="ref"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center border-4 border-dashed border-blue-200 rounded-2xl min-h-[300px] relative overflow-hidden bg-blue-50 group">
              {result ? (
                <img 
                  src={result} 
                  alt="Generated CUMJUG" 
                  className="w-full h-full object-cover animate-in fade-in zoom-in duration-500" 
                />
              ) : (
                <div className="text-center p-8 opacity-40 group-hover:opacity-60 transition-opacity">
                  <i className="fa-solid fa-wand-magic-sparkles text-6xl mb-4 text-[#0055FF]"></i>
                  <p className="font-bold">YOUR CUMJUG WILL APPEAR HERE</p>
                </div>
              )}
              
              {loading && (
                <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center z-10">
                  <div className="w-16 h-16 border-8 border-blue-100 border-t-[#0055FF] rounded-full animate-spin mb-4"></div>
                  <p className="font-heading text-[#0055FF] animate-pulse">FILLING JUG...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;


import React, { useState } from 'react';
import { generateMeme } from '../services/gemini';

const REF_IMAGE = "https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/logo%20-%202025-12-25T190013.020.png";

const PRESETS = [
  "The CUMJUG being carried by a giant eagle over a futuristic city",
  "A gold-plated CUMJUG sitting on a throne in a medieval castle",
  "The CUMJUG inside a high-tech laboratory with laser beams",
  "A group of people bowing down to the CUMJUG on a cloud",
  "The CUMJUG floating inside a massive bubble underwater",
  "The CUMJUG sitting on a Formula 1 car cockpit"
];

const MemeGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async (p?: string) => {
    const activePrompt = p || prompt;
    if (!activePrompt) {
      alert("Írj be valamit, amivel megtölthetjük a jug-ot!");
      return;
    }

    setLoading(true);
    try {
      const img = await generateMeme(activePrompt);
      if (img) {
        setResult(img);
      }
    } catch (err) {
      console.error("Generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!result) return;
    const link = document.createElement('a');
    link.href = result;
    link.download = `cumjug-meme-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#0055FF] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-5xl mb-4">AI JUG GENERATOR</h2>
          <p className="text-xl opacity-90">100% VISUAL ACCURACY BASED ON THE ORIGINAL JUG.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white text-[#0055FF] p-6 md:p-10 rounded-[3rem] shadow-2xl border-b-8 border-blue-900">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Input Column */}
            <div className="flex-1 space-y-6">
              <div className="bg-blue-50 p-4 rounded-2xl border-2 border-blue-100">
                <p className="text-xs font-bold uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                  Visual Reference Locked
                </p>
                <div className="flex gap-4 items-center">
                  <img 
                    src={REF_IMAGE} 
                    className="w-24 h-24 rounded-xl border-4 border-[#0055FF] shadow-md object-cover" 
                    alt="Reference"
                  />
                  <p className="text-sm font-semibold italic">
                    "Every generation uses this exact model: Clear glass, blue cap, thick white liquid."
                  </p>
                </div>
              </div>

              <div>
                <label className="block font-bold mb-2 uppercase tracking-wide text-sm">Custom Scenario</label>
                <textarea 
                  className="w-full p-4 border-4 border-[#0055FF] rounded-2xl focus:outline-none focus:ring-4 ring-blue-100 text-lg min-h-[100px] transition-all placeholder:opacity-30"
                  placeholder="e.g. The CUMJUG on top of the Eiffel Tower..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleGenerate()}
                  disabled={loading}
                  className="bg-[#0055FF] text-white font-heading text-xl py-5 rounded-2xl hover:bg-blue-600 transition-all disabled:opacity-50 active:scale-95 shadow-lg shadow-blue-200"
                >
                  {loading ? 'FILLING THE JUG...' : 'GENERATE CUSTOM JUG'}
                </button>
                <button 
                  onClick={() => {
                    const rand = PRESETS[Math.floor(Math.random() * PRESETS.length)];
                    setPrompt(rand);
                    handleGenerate(rand);
                  }}
                  disabled={loading}
                  className="bg-white border-4 border-[#0055FF] text-[#0055FF] font-bold py-3 rounded-2xl hover:bg-blue-50 transition-all active:scale-95"
                >
                  RANDOM SCENARIO
                </button>
              </div>
            </div>

            {/* Output Column */}
            <div className="flex-1">
              <div className="aspect-square flex flex-col items-center justify-center border-4 border-dashed border-blue-200 rounded-[2.5rem] relative overflow-hidden bg-blue-50/50 group">
                {result ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={result} 
                      alt="Generated CUMJUG" 
                      className="w-full h-full object-cover animate-in fade-in zoom-in duration-700" 
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold border border-[#0055FF] flex items-center gap-2">
                       <img src={REF_IMAGE} className="w-3 h-3 rounded-full" />
                       VERIFIED CUMJUG DESIGN
                    </div>
                    {/* Download Button Overlay */}
                    <button 
                      onClick={downloadImage}
                      className="absolute top-4 right-4 bg-[#0055FF] text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg active:scale-95 z-20"
                      title="Download Image"
                    >
                      <i className="fa-solid fa-download text-xl"></i>
                    </button>
                  </div>
                ) : (
                  <div className="text-center p-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 bg-[#0055FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fa-solid fa-droplet text-4xl text-[#0055FF]"></i>
                    </div>
                    <p className="font-heading text-xl mb-2">READY TO FILL</p>
                    <p className="text-xs max-w-[200px] mx-auto">Your high-fidelity CUMJUG render will appear here.</p>
                  </div>
                )}
                
                {loading && (
                  <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center z-10 backdrop-blur-sm">
                    <div className="relative">
                      <div className="w-24 h-24 border-8 border-blue-100 border-t-[#0055FF] rounded-full animate-spin"></div>
                      <i className="fa-solid fa-droplet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-[#0055FF] animate-bounce"></i>
                    </div>
                    <p className="font-heading text-[#0055FF] mt-6 text-2xl animate-pulse">FILLING JUG...</p>
                    <p className="text-xs text-blue-400 mt-2 font-bold uppercase tracking-widest">Applying 10 years of dedication</p>
                  </div>
                )}
              </div>
              {result && (
                <div className="mt-4 flex justify-center">
                  <button 
                    onClick={downloadImage}
                    className="flex items-center gap-2 font-bold text-[#0055FF] hover:underline"
                  >
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                    DOWNLOAD THIS MASTERPIECE
                  </button>
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

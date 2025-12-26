
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-bangers mb-8 text-blue-600">THE 10 YEAR JOURNEY</h2>
          <div className="space-y-6 text-lg text-blue-800/90 leading-relaxed font-medium">
            <p>
              It took <span className="text-blue-700 font-black">10 years</span> of dedication, focus, and unwavering community spirit, but we finally did it. We have successfully <span className="text-blue-700 font-black">filled the jug</span> with the pure, white, slimy essence of the internet.
            </p>
            <p className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 italic text-blue-800 font-bold">
              "We didn't choose the jug life, the jug life chose us. One drop at a time, we built an empire. Now the jug is overflowing, and the world must know the power of $CUMJUG."
            </p>
          </div>
        </div>

        <div className="glass-card p-6 rounded-[2rem] border border-blue-600/20 shadow-xl bg-white">
          <div className="text-blue-700 font-black mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            LATEST FROM X
          </div>
          <div className="rounded-xl overflow-hidden bg-blue-50/50 border border-blue-100 p-8 text-left italic">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden border border-blue-200">
                <img src="https://pbs.twimg.com/profile_images/2003851751129038848/mwq0fRWc_400x400.jpg" alt="user" />
              </div>
              <div>
                <div className="font-black text-blue-800 text-sm">CUMJUG @cumjugonsol</div>
                <div className="text-xs text-blue-700/60 font-bold">2h ago</div>
              </div>
            </div>
            <p className="text-blue-900 text-sm mb-4 font-bold not-italic leading-relaxed">The jug is finally 100% full. The wait is over. $CUMJUG is ready to take over Solana. 🥛💎</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-8 border-[#0055FF] py-16">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="https://pbs.twimg.com/profile_images/2003851751129038848/mwq0fRWc_400x400.jpg" 
          alt="CUMJUG" 
          className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-[#0055FF]"
        />
        <h3 className="font-heading text-4xl mb-4">$CUMJUG</h3>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          The ultimate Solana memecoin. 10 years of filling, 100 years of holding. 🥛💎
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://x.com/cumjugonsol" className="text-3xl hover:text-blue-600 transition-colors">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://pump.fun/2xREaVTYZXSmC3CtoxvJwEJcYZs9FudfkUYz8GCPpump" className="text-3xl hover:text-blue-600 transition-colors">
            <i className="fa-solid fa-droplet"></i>
          </a>
        </div>
        
        <div className="p-8 bg-blue-50 rounded-2xl border-2 border-blue-200 text-sm opacity-70 leading-relaxed text-[#0055FF]">
          DISCLAIMER: $CUMJUG is a memecoin with no intrinsic value or expectation of financial return. It's built for fun, memes, and the culture of filling jugs. Investing in memecoins carries significant risk. Do not invest more than you can afford to lose. The white liquid mentioned is purely metaphorical/digital.
        </div>
        
        <p className="mt-8 text-xs font-bold tracking-widest">
          © 2025 CUMJUG LABS. ALL JUGS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

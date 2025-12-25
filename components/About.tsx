
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-heading text-5xl mb-6">LORE OF THE JUG</h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="p-6 slime-blob rounded-3xl">
              It took <span className="font-bold underline">10 long years</span> of unyielding focus, persistence, and pure stamina... but we finally did it. 
              We successfully filled the jug with <span className="font-bold italic">cum</span>. 
              It’s white, it’s thick, and it’s overflowing with potential.
            </p>
            <p>
              Now, we invite you to join the movement. Don't just watch from the sidelines. 
              Grab your own jug. Fill it. Honor the legacy of $CUMJUG.
            </p>
            <div className="flex gap-4">
              <span className="bg-[#0055FF] text-white px-4 py-2 rounded-lg font-bold">STAMINA: 100/100</span>
              <span className="bg-[#0055FF] text-white px-4 py-2 rounded-lg font-bold">VISCOSITY: PEAK</span>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          {/* Mockup of a Twitter Embed since actual SDK needs external scripts loaded properly */}
          <div className="bg-[#f7f9f9] border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://pbs.twimg.com/profile_images/2003851751129038848/mwq0fRWc_400x400.jpg" className="w-12 h-12 rounded-full" alt="profile"/>
              <div>
                <div className="font-bold">CUMJUG @ SOLANA</div>
                <div className="text-gray-500 text-sm">@cumjugonsol</div>
              </div>
              <div className="ml-auto text-[#0055FF]">
                <i className="fa-brands fa-x-twitter text-xl"></i>
              </div>
            </div>
            <p className="text-lg mb-4">
              The jug is finally full. 10 years in the making. 🥛💎 <br/><br/>
              Join the $CUMJUG revolution. The thickest liquidity on Solana.
            </p>
            <img 
              src="https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/Gemini_Generated_Image_fgj3y8fgj3y8fgj3.png" 
              className="rounded-xl w-full border border-gray-200 mb-4" 
              alt="The Full Jug"
            />
            <div className="flex justify-between text-gray-500">
              <span><i className="fa-regular fa-comment mr-2"></i> 420</span>
              <span><i className="fa-solid fa-retweet mr-2"></i> 69</span>
              <span><i className="fa-regular fa-heart mr-2 text-red-500"></i> 1.2k</span>
              <span><i className="fa-solid fa-chart-simple mr-2"></i> 50k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

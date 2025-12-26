
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MemeGenerator from './components/MemeGenerator';
import Stats from './components/Stats';
import Chart from './components/Chart';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="blob top-0 -left-20"></div>
      <div className="blob bottom-0 -right-20" style={{ animationDelay: '-10s' }}></div>
      <div className="blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <MemeGenerator />
        <Chart />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;


import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MemeGenerator from './components/MemeGenerator';
import Chart from './components/Chart';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Decorative Drips */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="drip opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `drip ${Math.random() * 5 + 5}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <Header />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="scroll-reveal">
          <About />
        </section>
        
        <section id="generator" className="scroll-reveal">
          <MemeGenerator />
        </section>
        
        <section id="chart" className="scroll-reveal pb-20">
          <Chart />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

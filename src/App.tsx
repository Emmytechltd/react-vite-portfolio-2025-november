import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { TechStack } from './components/sections/TechStack';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative selection:bg-primary-500/30 selection:text-white">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-[-1] bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e50a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e50a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

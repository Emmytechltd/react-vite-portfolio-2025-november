import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-sm text-gray-300 font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight leading-tight">
            {portfolioData.hero.headline.split(' ').map((word, i) => (
              word.toLowerCase() === 'experiences' || word.toLowerCase() === 'matter.' ? 
              <span key={i} className="text-gradient"> {word}</span> : ` ${word}`
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
            {portfolioData.hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
};

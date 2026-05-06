import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="About Me" 
              subtitle="Bridging the gap between design and engineering."
            />
            <div className="prose prose-invert max-w-none space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>{portfolioData.about.story}</p>
              
              <div className="pt-6">
                <h3 className="text-white font-heading font-semibold text-xl mb-4">My Superpowers</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.about.skillsHighlight.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full glass border border-white/10 text-primary-400 font-medium text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass p-2 relative z-10 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-surface/80 flex items-center justify-center relative overflow-hidden">
                {/* Fallback image or custom pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay"></div>
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 cursor-pointer"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/30 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-500/30 rounded-full blur-3xl z-0"></div>
            
            <div className="absolute -right-8 bottom-12 glass p-4 rounded-xl z-20 shadow-xl border border-white/10 hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
              <p className="text-sm font-bold text-white">5+ Years</p>
              <p className="text-xs text-gray-400">Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

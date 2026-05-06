import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Featured Work" 
          subtitle="A selection of my recent projects and experiments."
        />

        <div className="space-y-24">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-8 lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
              >
                {/* Image Showcase */}
                <div className="w-full lg:w-3/5 group">
                  <div className="relative rounded-2xl overflow-hidden glass p-2 border-white/10 transition-all duration-500 hover:border-primary-500/50">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-primary-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full lg:w-2/5 flex flex-col ${isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} relative z-20`}>
                  <p className="text-primary-400 font-medium tracking-wider text-sm uppercase mb-2">Featured Project</p>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 hover:text-primary-400 transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                  
                  <Card className="!p-6 mb-6 lg:w-[120%] lg:-ml-12 shadow-2xl relative z-30" glass={true}>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      {project.description}
                    </p>
                  </Card>

                  <ul className={`flex flex-wrap gap-4 text-gray-400 font-medium text-sm mb-8 ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
                    {project.techStack.map(tech => (
                      <li key={tech} className="bg-white/5 px-3 py-1 rounded border border-white/10">{tech}</li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-6 ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                        <FiGithub size={24} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                        <FiExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

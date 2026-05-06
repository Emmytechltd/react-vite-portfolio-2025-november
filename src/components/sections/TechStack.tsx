import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, 
  SiGit, SiFigma, SiDocker, SiVite 
} from 'react-icons/si';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

const IconMap: Record<string, React.ElementType> = {
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiGit, SiFigma, SiDocker, SiVite
};

export const TechStack: React.FC = () => {
  const categories = Array.from(new Set(portfolioData.techStack.map(item => item.category)));

  return (
    <section className="py-20 md:py-32 relative bg-surface/30 border-y border-white/5" id="tech">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Tech Arsenal" 
          subtitle="The tools and technologies I use to build robust products."
          className="items-center text-center"
        />

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-16">
          {categories.map((category, idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-heading font-semibold text-white mb-6 border-b border-white/10 pb-4 inline-block">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {portfolioData.techStack
                  .filter(item => item.category === category)
                  .map((tech) => {
                    const Icon = IconMap[tech.iconName];
                    return (
                      <div 
                        key={tech.name} 
                        className="flex items-center gap-3 p-3 rounded-lg glass border-white/5 hover:bg-white/10 transition-colors group cursor-default"
                      >
                        {Icon && <Icon className="text-gray-400 group-hover:text-primary-400 transition-colors text-xl" />}
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

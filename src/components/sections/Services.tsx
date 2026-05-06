import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiLayout, FiCpu } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolioData';

// Map string icon names to actual components
const IconMap: Record<string, React.ElementType> = {
  FiCode,
  FiServer,
  FiLayout,
  FiCpu
};

export const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 md:py-32 relative" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="What I Do" 
          subtitle="Delivering end-to-end solutions that elevate your brand."
          className="items-center text-center md:items-start md:text-left"
        />

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {portfolioData.services.map((service) => {
            const Icon = IconMap[service.icon] || FiCode;
            return (
              <motion.div key={service.id} variants={itemVariants} className="h-full">
                <Card className="h-full flex flex-col group hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-xl glass border-white/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-white group-hover:bg-gradient-to-br from-primary-500 to-secondary-500 transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

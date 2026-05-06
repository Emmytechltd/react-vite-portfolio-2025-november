import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-16 md:mb-24 text-center md:text-left ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 mx-auto md:mx-0 rounded-full" />
        )}
        {subtitle && (
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

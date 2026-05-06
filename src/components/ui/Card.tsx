import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  glass = true,
  ...props 
}) => {
  return (
    <motion.div
      className={`rounded-2xl p-6 md:p-8 ${glass ? 'glass-card' : 'bg-surface'} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

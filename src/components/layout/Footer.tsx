import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface/50 mt-20 md:mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold font-heading text-xs">
              E
            </div>
            <span className="font-heading font-bold text-lg tracking-tight">
              Emmy<span className="text-primary-400">tech</span>
            </span>
          </div>
          
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Emmytech Digital Solutions. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

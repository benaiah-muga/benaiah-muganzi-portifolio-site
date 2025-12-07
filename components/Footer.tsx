import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-background border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-textSecondary text-sm">
          © {new Date().getFullYear()} Benaiah Muganzi. Built with React, Tailwind & Framer Motion.
        </p>
      </div>
    </footer>
  );
};
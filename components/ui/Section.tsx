import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};
import React from 'react';
import { Section } from './ui/Section';
import { CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { Award, Code, Database, Cloud, Brain } from 'lucide-react';

const iconMap = {
  code: Code,
  db: Database,
  cloud: Cloud,
  ai: Brain
};

export const Certifications: React.FC = () => {
  return (
    <Section id="certifications">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CERTIFICATIONS.map((cert, idx) => {
          const Icon = iconMap[cert.iconType] || Award;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/20 transition-all"
            >
              <div className="p-2 rounded-lg bg-white/5 text-secondary">
                <Icon size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm line-clamp-2">{cert.name}</h4>
                <p className="text-textSecondary text-xs">{cert.issuer}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
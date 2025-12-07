import React from 'react';
import { Section } from './ui/Section';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { Database, Cloud, Zap, Container, Brain, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Database,
  Cloud,
  Zap,
  Container,
  Brain
};

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-surface/30">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          What I Do
        </h2>
        <p className="text-textSecondary max-w-xl text-lg">
          I don't just write code. I build robust, scalable systems that solve real business problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERIENCES.map((exp, index) => {
          const Icon = iconMap[exp.iconName] || Zap;
          // Span 2 columns for the first or last item to make grid interesting
          const isWide = index === 0 || index === 4; 
          
          return (
            <motion.div
              key={exp.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 ${isWide ? 'md:col-span-2' : ''}`}
            >
              <div className="w-12 h-12 rounded-lg bg-background border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {exp.category}
              </h3>
              
              <ul className="space-y-3">
                {exp.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-textSecondary text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0 opacity-50 group-hover:opacity-100" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
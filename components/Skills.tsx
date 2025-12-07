import React from 'react';
import { Section } from './ui/Section';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Technical Arsenal
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-surface to-surface/50 border border-white/5"
          >
            <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md bg-white/5 text-sm text-textSecondary border border-white/5 hover:bg-primary/10 hover:text-white hover:border-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
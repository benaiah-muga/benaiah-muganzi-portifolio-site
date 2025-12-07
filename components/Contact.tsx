import React from 'react';
import { Section } from './ui/Section';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-b from-background to-surface/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-8"
        >
          Let's Build Something
        </motion.h2>
        
        <p className="text-xl text-textSecondary mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to connect? I'm always open to discussing new opportunities, especially in AI and Cloud Architecture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all hover:scale-105"
          >
            <Mail size={20} />
            {SOCIAL_LINKS.email}
          </a>
          <a
            href={`tel:${SOCIAL_LINKS.phone}`}
            className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all hover:scale-105"
          >
            <Phone size={20} />
            {SOCIAL_LINKS.phone}
          </a>
          
          <div className="flex gap-4">
             <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-surface border border-white/10 rounded-lg text-white hover:text-primary hover:border-primary transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-surface border border-white/10 rounded-lg text-white hover:text-primary hover:border-primary transition-all"
            >
              <Github size={24} />
            </a>
            <a
              href={`https://wa.me/${SOCIAL_LINKS.phone.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-surface border border-white/10 rounded-lg text-white hover:text-primary hover:border-primary transition-all"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
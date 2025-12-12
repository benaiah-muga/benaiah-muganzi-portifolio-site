import React from 'react';
import { Section } from './ui/Section';
import { ABOUT_DATA, PROFILE_IMAGE } from '../constants';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <motion.div
              className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-surface relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={PROFILE_IMAGE}
                alt="Benaiah Muganzi"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display text-xl">Benaiah Muganzi</p>
                <p className="text-primary text-sm">Full Stack Engineer</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8 text-lg text-textSecondary leading-relaxed font-light">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span>
          </motion.h2>

          <p>{ABOUT_DATA.p1}</p>

          <div className="border-l-2 border-primary pl-6 py-2 my-4">
            <p className="text-white font-medium text-xl italic">"{ABOUT_DATA.highlight}"</p>
          </div>

          <p>{ABOUT_DATA.p2}</p>
          <p>{ABOUT_DATA.p3}</p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h4 className="text-white font-display font-bold text-3xl">3+</h4>
              <span className="text-sm text-textSecondary uppercase tracking-wider">Years Exp</span>
            </div>
            <div>
              <h4 className="text-white font-display font-bold text-3xl">20+</h4>
              <span className="text-sm text-textSecondary uppercase tracking-wider">Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
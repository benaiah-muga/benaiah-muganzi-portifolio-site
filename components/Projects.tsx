import React from 'react';
import { Section } from './ui/Section';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-background">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Featured Work
        </h2>
        <p className="text-textSecondary text-lg">
          A selection of projects that showcase my passion for building high-quality software.
        </p>
      </div>

      <div className="space-y-24 md:space-y-32">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-3/5 group">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-video bg-surface">
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                 />
              </div>
            </div>

            {/* Project Content */}
            <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
              <span className="text-primary font-medium tracking-wider text-sm mb-3">0{index + 1}</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-xl text-white/80 font-light mb-6">
                {project.tagline}
              </p>
              <p className="text-textSecondary leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-textSecondary border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                    View Live <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
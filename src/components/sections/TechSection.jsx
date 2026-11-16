import React from 'react';
import { motion } from 'framer-motion';
import { TechCard } from '../ui/TechCard';
import { TECHNOLOGIES } from '../../data/portfolioData';

export function TechSection() {
  return (
    <section id="tecnologias" className="px-6 lg:px-16 py-24 border-t border-slate-200 dark:border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16 space-y-4"
      >
        <div className="font-mono text-xs text-slate-500 dark:text-gray-400 tracking-widest uppercase">A MINHA STACK</div>
        <h2 className="text-4xl sm:text-6xl font-light tracking-tight">
          Tecnologias que <br />
          <span className="font-semibold text-slate-900 dark:text-white">domino</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-sm font-light">
          Ferramentas escolhidas para criar soluções completas e de alta qualidade.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TECHNOLOGIES.map((tech, idx) => (
          <TechCard 
            key={tech.id}
            index={idx}
            name={tech.name}
            description={tech.description}
            icon={tech.icon}
          />
        ))}
      </div>
    </section>
  );
}
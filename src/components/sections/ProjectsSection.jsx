import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

export function ProjectsSection() {
  return (
    <section id="projetos" className="px-6 lg:px-16 py-24 border-t border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-[#090c12]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div className="space-y-4">
          <div className="font-mono text-xs text-slate-500 dark:text-gray-400 tracking-widest uppercase">PROJETOS EM DESTAQUE</div>
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-slate-900 dark:text-white">Trabalho recente</h2>
        </div>
        <p className="text-slate-600 dark:text-gray-400 text-sm max-w-md font-light">
          Uma seleção de produtos onde estratégia, design e código trabalham juntos.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((proj, idx) => (
          <motion.div 
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0a0d14] overflow-hidden group cursor-pointer shadow-sm dark:shadow-none"
          >
            <div className="aspect-[4/3]  p-6 border-b border-slate-200 dark:border-white/5 relative flex items-center justify-center"  style={{ backgroundImage: `url(${proj.img})`, backgroundSize: '100% 110%' }}>

            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 dark:text-gray-500">
                <span>{proj.id}</span>
                <span>{proj.category}</span>
              </div>
              <h3 className="text-2xl font-light text-slate-900 dark:text-white">{proj.title}</h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed">{proj.description}</p>
              <a href={proj.link} target='__blank' className="inline-flex items-center gap-2 font-mono text-xs text-slate-900 dark:text-white pt-2 hover:text-slate-600 dark:hover:text-gray-300 transition-colors">
                VER PROJETO <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
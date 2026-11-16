import React from 'react';
import { motion } from 'framer-motion';

export function TechCard({ name, description, icon: Icon, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="p-8 border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0a0d14] hover:border-slate-400 dark:hover:border-white/20 transition-colors duration-300 group flex flex-col justify-between cursor-pointer shadow-sm dark:shadow-none"
    >
      <div className="w-12 h-12 rounded border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-800 dark:text-white mb-8 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>

      <div>
        <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-1">{name}</h3>
        <p className="font-mono text-xs text-slate-500 dark:text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
}
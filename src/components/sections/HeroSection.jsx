import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="inicio" className="px-6 lg:px-16 py-20 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        className="lg:col-span-7 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="font-mono text-xs text-slate-500 dark:text-gray-400 tracking-widest uppercase">
          OLÁ, SOU LÍDIO CORTEZ <br /><br /> ENGENHEIRO DE SOFTWARE
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-light tracking-tight leading-[1.05]">
          Crio <br />
          <span className="font-semibold text-slate-900 dark:text-white">experiências</span> <br />
          <span className="text-slate-400 dark:text-gray-500 font-light">digitais</span> <br />
          <span className="font-semibold text-slate-900 dark:text-white">completas.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-slate-600 dark:text-gray-400 text-lg max-w-xl font-light leading-relaxed">
          Desenvolvo produtos modernos, rápidos e escaláveis — da interface à arquitetura que faz tudo funcionar.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
          <Button href="#projetos" variant="primary">
            Ver projetos <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button href="#" variant="secondary">
            Descarregar CV <Download className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Foto de Perfil */}
      <motion.div 
        className="lg:col-span-5 relative flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-md aspect-[4/5] rounded-full overflow-hidden border border-slate-200 dark:border-white/10 p-1 dark:bg-transparent shadow-xl dark:shadow-none">
          <div className="w-full h-full rounded-full  dark:bg-[#0b0e14] overflow-hidden relative">
            <img 
              src="profile.png" 
              alt="Desenvolvedor" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
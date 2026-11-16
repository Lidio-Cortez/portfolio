import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { StatCard } from '../ui/StatCard';
import { STATS } from '../../data/portfolioData';

export function AboutSection() {
  return (
    <section id="sobre" className="px-6 lg:px-16 py-20 border-t border-white/5 bg-[#090c12]">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="font-mono text-xs text-gray-400 tracking-widest uppercase">SOBRE MIM</div>
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight">
            Código limpo. <br />
            <span className="text-gray-500 font-light">Resultados reais.</span>
          </h2>
          <p className="text-gray-400 text-base font-light leading-relaxed">
            Transformo desafios complexos em soluções digitais simples, eficientes e preparadas para crescer. Trabalho em todo o produto, unindo pensamento de negócio, experiência e engenharia.
          </p>
          <div>
            <a href="#contacto" className="inline-flex items-center gap-2 font-mono text-xs text-white underline underline-offset-8 hover:text-gray-300 transition-colors">
              Saber mais sobre mim <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4 border-l border-white/5 pl-0 lg:pl-12">
          {STATS.map((stat, idx) => (
            <StatCard key={idx} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
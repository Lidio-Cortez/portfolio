import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function ContactSection() {
  return (
    <section id="contacto" className="px-6 lg:px-16 py-32 border-t border-white/5">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 space-y-6">
          <div className="font-mono text-xs text-gray-400 tracking-widest uppercase">VAMOS TRABALHAR JUNTOS</div>
          <h2 className="text-5xl sm:text-7xl font-light tracking-tight leading-tight">
            Tens um projeto <br />
            <span className="text-gray-500 font-light">em mente?</span>
          </h2>
        </div>
        <div className="md:col-span-4 space-y-6">
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Estou disponível para novos desafios, colaborações e ideias que merecem ganhar vida.
          </p>
          <div>
            <Button href="mailto:seuemail@exemplo.com" variant="primary" className="py-4">
              Enviar mensagem <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
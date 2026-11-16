import React, { useState } from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext'; // Importa o hook do tema
import HireModal from '../ui/HireModal';

export function Navbar() {
  // Pega o tema atual e a função de alternar
  const { theme, toggleTheme } = useTheme();

  // Estado para controlar a abertura/fecho do modal de contratação
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#07090e]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 px-6 lg:px-16 py-4 flex items-center justify-between transition-colors duration-300">
        <div className="flex items-center gap-2 font-mono text-sm tracking-wider">
          <span className="text-gray-400">&lt;/&gt;</span>
          <span className="font-bold text-gray-900 dark:text-white">dev.Lídio</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-gray-600 dark:text-gray-400">
          <a href="#inicio" className="hover:text-black dark:hover:text-white transition-colors">Início</a>
          <a href="#sobre" className="hover:text-black dark:hover:text-white transition-colors">Sobre</a>
          <a href="#tecnologias" className="hover:text-black dark:hover:text-white transition-colors">Tecnologias</a>
          <a href="#projetos" className="hover:text-black dark:hover:text-white transition-colors">Projetos</a>
          <a href="#contacto" className="hover:text-black dark:hover:text-white transition-colors">Contacto</a>
        </nav>

        <div className="flex items-center gap-4">
          {/* BOTÃO DE TEMA CONECTADO */}
          <button 
            onClick={toggleTheme}
            aria-label="Alternar Tema"
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-white/5"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* BOTÃO CONTRATAR AGORA DISPARA O MODAL */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-mono font-medium px-4 py-2.5 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Contratar <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* COMPONENTE MODAL CONECTADO */}
      <HireModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
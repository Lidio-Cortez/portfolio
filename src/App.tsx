import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { TechSection } from './components/sections/TechSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#07090e] dark:text-white font-sans antialiased selection:bg-gray-900 selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
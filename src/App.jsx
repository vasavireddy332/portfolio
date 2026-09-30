import React from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CurrentFocus from './components/CurrentFocus';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#06080e] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Line */}
      <ScrollProgress />

      {/* Fixed Glass Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <CurrentFocus />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}

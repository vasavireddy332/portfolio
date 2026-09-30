import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Terminal, ChevronRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO, RESUME_URL } from '../config';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080e]/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group"
            data-cursor="HOME"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-white tracking-wider group-hover:text-cyan-300 transition-colors">
                VASAVI KADARI
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
                DATA • SCIENCE • AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-900/40 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  data-cursor={item.name.toUpperCase()}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              data-cursor="GITHUB"
              className="p-2 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              data-cursor="LINKEDIN"
              className="p-2 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={RESUME_URL}
              download="Vasavi_Kadari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="RESUME"
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={RESUME_URL}
              download="Vasavi_Kadari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30 rounded-md bg-cyan-950/40"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/80 text-cyan-400 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#06080e]/95 backdrop-blur-2xl border-b border-cyan-500/20 py-6 px-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 text-sm font-medium transition-all"
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </a>
            ))}

            <div className="pt-4 flex items-center justify-around border-t border-slate-800">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-slate-300 hover:text-cyan-400"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-slate-300 hover:text-cyan-400"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-2 text-xs text-slate-300 hover:text-cyan-400"
              >
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

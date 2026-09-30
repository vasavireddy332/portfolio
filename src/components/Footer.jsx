import React from 'react';
import { Terminal, Mail, FileText, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO, RESUME_URL } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060b] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          
          {/* Brand Left */}
          <div className="md:col-span-6 flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-wider">
                VASAVI KADARI
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400/90 tracking-widest uppercase">
              Data • Analytics • Python • AI
            </p>
            <p className="text-slate-400 text-xs max-w-sm">
              Computer Science student focused on transforming raw data into actionable intelligence.
            </p>
          </div>

          {/* Quick Links Right */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6 text-xs font-mono text-slate-300">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center space-x-1.5 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center space-x-1.5 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-cyan-400 flex items-center space-x-1.5 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <a
              href={RESUME_URL}
              download="Vasavi_Kadari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center space-x-1.5 transition-colors text-cyan-300"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

        </div>

        {/* Copyright & Scroll to Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
          <p>© 2026 Vasavi Kadari. Built with curiosity, data & code.</p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            data-cursor="TOP"
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

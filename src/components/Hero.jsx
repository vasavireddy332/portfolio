import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail, Database, Cpu, Sparkles, BarChart3, Code2, LineChart, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import HeroCanvas from './HeroCanvas';
import { PERSONAL_INFO, RESUME_URL } from '../config';

export default function Hero() {
  const headlines = [
    'Aspiring Data Analyst & Data Science Enthusiast',
    'Turning Data into Insights.',
    'Building with Python.',
    'Solving Problems with Analytics.',
    'Exploring AI & Data Science.',
  ];

  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [headlines.length]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-radial-gradient bg-grid-pattern"
    >
      {/* Dynamic Background Mesh Canvas */}
      <HeroCanvas />

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md w-fit shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono font-semibold text-cyan-300 tracking-widest uppercase">
                {PERSONAL_INFO.eyebrow}
              </span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="font-heading font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white">
                VASAVI <span className="text-gradient-cyan-violet">KADARI</span>
              </h1>

              {/* Dynamic Rotator Headline */}
              <div className="h-14 sm:h-16 flex items-center overflow-hidden mt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHeadline}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="text-lg sm:text-2xl font-mono font-semibold text-cyan-400 flex items-center space-x-2"
                  >
                    <Sparkles className="w-5 h-5 text-violet-400 shrink-0" />
                    <span className="truncate">{headlines[currentHeadline]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Computer Science student passionate about transforming data into meaningful insights and building practical technology solutions with Python, SQL, Power BI and APIs.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                data-cursor="PROJECTS"
                className="group relative inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={RESUME_URL}
                download="Vasavi_Kadari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="DOWNLOAD"
                className="group inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-slate-800/80 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                data-cursor="CONNECT"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="pt-4 flex items-center space-x-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Social Links:</span>
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  data-cursor="GITHUB"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  data-cursor="LINKEDIN"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email"
                  data-cursor="EMAIL"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Column — Futuristic Interactive Data Visual HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            {/* HUD Outer Container */}
            <div className="relative glass-panel rounded-2xl p-6 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden">
              
              {/* Header HUD Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider">
                    DATA INTELLIGENCE VISUAL
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">LIVE FEED</span>
                  <span className="text-cyan-400 font-bold">● ONLINE</span>
                </div>
              </div>

              {/* Central Glowing Radar Graphic + Animated Nodes */}
              <div className="relative my-6 h-56 flex items-center justify-center">
                
                {/* Radar grid circles */}
                <div className="absolute w-48 h-48 rounded-full border border-cyan-500/20 animate-radar" />
                <div className="absolute w-36 h-36 rounded-full border border-violet-500/20" />
                <div className="absolute w-24 h-24 rounded-full border border-cyan-400/30 bg-cyan-950/20 backdrop-blur-sm" />

                {/* Central Core Icon */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 p-0.5 shadow-[0_0_25px_#06b6d4]">
                  <div className="w-full h-full rounded-full bg-[#06080e] flex items-center justify-center">
                    <Database className="w-6 h-6 text-cyan-400 animate-pulse" />
                  </div>
                </div>

                {/* Orbiting Floating Tag Pills */}
                <div className="absolute top-2 left-4 px-2.5 py-1 rounded-full bg-slate-900/90 border border-cyan-400/40 text-[11px] font-mono text-cyan-300 shadow-md animate-float">
                  🐍 Python
                </div>
                <div className="absolute bottom-4 left-6 px-2.5 py-1 rounded-full bg-slate-900/90 border border-violet-400/40 text-[11px] font-mono text-violet-300 shadow-md animate-float-delayed">
                  🗄 SQL
                </div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-slate-900/90 border border-yellow-400/40 text-[11px] font-mono text-yellow-300 shadow-md animate-float">
                  📊 Power BI
                </div>
                <div className="absolute bottom-6 right-6 px-2.5 py-1 rounded-full bg-slate-900/90 border border-teal-400/40 text-[11px] font-mono text-teal-300 shadow-md animate-float-delayed">
                  ⚡ FastAPI
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-slate-300">
                  Pandas
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-slate-300">
                  Data Science
                </div>
              </div>

              {/* Floating KPI Cards inside Visual */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/70 border border-cyan-500/20 backdrop-blur-md">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>Query Latency</span>
                    <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-lg font-bold font-mono text-cyan-300">8.4ms</span>
                    <span className="text-[10px] text-teal-400 font-mono">↓ -32%</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/70 border border-violet-500/20 backdrop-blur-md">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>Model Precision</span>
                    <LineChart className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-lg font-bold font-mono text-violet-300">99.2%</span>
                    <span className="text-[10px] text-violet-400 font-mono">Verified</span>
                  </div>
                </div>
              </div>

              {/* Live Interactive Code Snippet Box */}
              <div className="mt-3 p-3 rounded-xl bg-[#04060a] border border-slate-800 font-mono text-[11px] text-slate-300 overflow-hidden">
                <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1.5 border-b border-slate-800/80 mb-2">
                  <div className="flex items-center space-x-1.5">
                    <Code2 className="w-3 h-3 text-cyan-400" />
                    <span>query_analytics.sql</span>
                  </div>
                  <span className="text-cyan-400">T-SQL</span>
                </div>
                <div className="space-y-0.5 leading-tight">
                  <p className="text-purple-400">SELECT <span className="text-cyan-300">category, SUM(revenue)</span></p>
                  <p className="text-purple-400">FROM <span className="text-white">global_sales</span></p>
                  <p className="text-purple-400">GROUP BY <span className="text-cyan-300">category</span></p>
                  <p className="text-purple-400">ORDER BY <span className="text-emerald-400">SUM(revenue) DESC</span>;</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, GitBranch, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../config';

function Counter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endNum = parseFloat(end);
    const steps = 40;
    const increment = endNum / steps;
    const stepDuration = (duration * 1000) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= endNum) {
        setCount(endNum);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, duration]);

  const display = Number.isInteger(parseFloat(end))
    ? Math.floor(count)
    : count.toFixed(1);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    {
      value: '8.0',
      numeric: 8.0,
      label: 'CGPA',
      subtext: 'Academic Excellence',
      icon: Award,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      value: '2027',
      numeric: 2027,
      label: 'Graduation',
      subtext: 'B.Tech CS Engineering',
      icon: GraduationCap,
      color: 'from-violet-500 to-purple-500',
    },
    {
      value: '23+',
      numeric: 23,
      suffix: '+',
      label: 'GitHub Repositories',
      subtext: 'Code & Data Projects',
      icon: GitBranch,
      color: 'from-teal-400 to-cyan-500',
    },
    {
      value: '4+',
      numeric: 4,
      suffix: '+',
      label: 'Core Data / Dev Areas',
      subtext: 'Python, SQL, BI & APIs',
      icon: LayoutGrid,
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#06080e] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest">
              BACKGROUND & METRICS
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            About <span className="text-gradient-cyan-violet">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <div className="glass-panel rounded-2xl p-8 border border-white/10 shadow-xl space-y-6">
              <h3 className="font-heading font-bold text-2xl text-white flex items-center space-x-2">
                <span>Passionate Data & Technology Explorer</span>
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                I’m Vasavi Kadari, a Computer Science Engineering student with a growing focus on Data Analytics, Data Science and Python-based development. I enjoy working with data, finding patterns, building dashboards and developing practical software solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase">Degree</h4>
                    <p className="text-sm font-semibold text-white">B.Tech Computer Science Engineering</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase">Location</h4>
                    <p className="text-sm font-semibold text-white">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:col-span-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase">Institution</h4>
                    <p className="text-sm font-semibold text-white">Sri Indu Institute of Engineering & Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Animated Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-2 gap-5"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-400/50"
                  data-cursor="METRIC"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 mb-4 shadow-lg`}>
                    <div className="w-full h-full bg-[#0a0e19] rounded-[10px] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <div className="font-mono font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-1">
                    <Counter end={stat.numeric} suffix={stat.suffix || ''} />
                  </div>

                  <div className="font-heading font-bold text-sm text-cyan-300">
                    {stat.label}
                  </div>

                  <div className="text-xs text-slate-400 mt-1">
                    {stat.subtext}
                  </div>

                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-full pointer-events-none" />
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

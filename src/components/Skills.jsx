import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BarChart2, Server, Database, Wrench, Brain, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'hover:border-cyan-400/60',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]',
      skills: [
        { name: 'Python', tag: 'Core Language', icon: '🐍' },
        { name: 'C', tag: 'Procedural', icon: '⚡' },
      ],
    },
    {
      title: 'Data Analytics & BI',
      icon: BarChart2,
      color: 'from-violet-500 to-purple-600',
      borderColor: 'hover:border-violet-400/60',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]',
      skills: [
        { name: 'SQL', tag: 'Queries & Window Functions', icon: '🗄' },
        { name: 'Pandas', tag: 'Data Wrangling', icon: '🐼' },
        { name: 'NumPy', tag: 'Numerical Analysis', icon: '📐' },
        { name: 'Power BI', tag: 'Dashboards & Modeling', icon: '📊' },
        { name: 'DAX', tag: 'Calculated Measures', icon: '🔢' },
        { name: 'Power Query', tag: 'ETL Transformations', icon: '🔄' },
        { name: 'Excel', tag: 'VLOOKUP & Pivot Tables', icon: '📈' },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      color: 'from-teal-400 to-emerald-600',
      borderColor: 'hover:border-teal-400/60',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]',
      skills: [
        { name: 'FastAPI', tag: 'Async Web Microservices', icon: '⚡' },
        { name: 'REST APIs', tag: 'Endpoints & Architecture', icon: '🌐' },
        { name: 'SQLAlchemy', tag: 'Python ORM', icon: '🔗' },
        { name: 'Pydantic', tag: 'Data Validation', icon: '🛡' },
        { name: 'Uvicorn', tag: 'ASGI Server', icon: '🚀' },
      ],
    },
    {
      title: 'Database Systems',
      icon: Database,
      color: 'from-blue-500 to-indigo-600',
      borderColor: 'hover:border-blue-400/60',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]',
      skills: [
        { name: 'MySQL', tag: 'Relational Database', icon: '🐬' },
        { name: 'SQL Server', tag: 'Enterprise Queries', icon: '💾' },
      ],
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      color: 'from-amber-400 to-orange-500',
      borderColor: 'hover:border-amber-400/60',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]',
      skills: [
        { name: 'Git', tag: 'Version Control', icon: '🌿' },
        { name: 'GitHub', tag: 'Repository Workflow', icon: '🐙' },
      ],
    },
    {
      title: 'Soft Skills & Strategy',
      icon: Brain,
      color: 'from-pink-500 to-rose-600',
      borderColor: 'hover:border-pink-400/60',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]',
      skills: [
        { name: 'Analytical Thinking', tag: 'Data Logic', icon: '🧠' },
        { name: 'Problem Solving', tag: 'Algorithmic Focus', icon: '🧩' },
        { name: 'Business Requirements', tag: 'Domain Understanding', icon: '📋' },
        { name: 'Stakeholder Communication', tag: 'Reporting', icon: '💬' },
        { name: 'Data Storytelling', tag: 'Executive Insights', icon: '📖' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#070a10] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest">
              CAPABILITIES
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Technical <span className="text-gradient-cyan-violet">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            An interactive ecosystem of languages, analytical tools, backend frameworks and databases.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Skills Grid Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card rounded-2xl p-6 relative group transition-all duration-300 ${cat.borderColor} ${cat.glowColor}`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} p-0.5 shadow-md shrink-0`}>
                    <div className="w-full h-full bg-[#0a0e19] rounded-[10px] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400/80">
                      {cat.skills.length} Competencies
                    </span>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      data-cursor="SKILL"
                      className="group/pill flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 hover:bg-cyan-950/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all duration-200"
                    >
                      <span className="text-sm group-hover/pill:scale-125 transition-transform">
                        {skill.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-200 group-hover/pill:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">
                          {skill.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

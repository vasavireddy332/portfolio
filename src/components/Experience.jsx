import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Sparkles, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'GenAI-Powered Data Analytics Job Simulation',
      company: 'Forage',
      period: 'Practical Simulation',
      type: 'Data & Financial Analytics',
      description:
        'Completed a GenAI-powered data analytics job simulation involving financial datasets, validation of AI-generated insights and business-ready reporting.',
      highlights: [
        'Analyzed complex financial datasets for business trend anomalies',
        'Validated AI-generated data hypotheses against raw transaction models',
        'Created data-driven business presentations & executive reporting assets',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-[#070a10] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest">
              PRACTICAL TRAINING
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Practical <span className="text-gradient-cyan-violet">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-0 z-10 w-10 h-10 rounded-full bg-[#06080e] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#06b6d4]">
                <Briefcase className="w-4 h-4 text-cyan-300" />
              </div>

              {/* Experience Card */}
              <div className="ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] sm:even:ml-auto glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-bold">
                    {exp.company}
                  </span>
                  <div className="flex items-center space-x-1 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-white mb-2">
                  {exp.role}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

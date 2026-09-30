import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      category: 'Database Querying & Optimization',
      color: 'from-emerald-400 to-teal-600',
      skills: ['Complex Joins', 'Subqueries', 'Aggregations', 'Data Filtering'],
    },
    {
      title: 'Python for Data Analysis',
      issuer: 'Simplilearn',
      category: 'Data Science & Analytics',
      color: 'from-blue-400 to-cyan-600',
      skills: ['Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Analysis'],
    },
    {
      title: 'Data Analytics with Artificial Intelligence',
      issuer: 'SQL School Institute',
      category: 'AI & Enterprise Analytics',
      color: 'from-violet-400 to-purple-600',
      skills: ['AI-Driven Analytics', 'SQL Modeling', 'Business Intelligence', 'Data Insight Validation'],
    },
    {
      title: 'Power BI Workshop',
      issuer: 'Data Analytics Certification',
      category: 'Data Visualization & Dashboards',
      color: 'from-yellow-400 to-amber-600',
      skills: ['Power BI Desktop', 'DAX Measures', 'Dashboard Design', 'Data Transformations'],
    },
  ];

  return (
    <section id="certifications" className="relative py-24 bg-[#070a10] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest">
              VERIFIED CREDENTIALS
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Certifications & <span className="text-gradient-cyan-violet">Credentials</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              data-cursor="CERTIFICATE"
              className="glass-card rounded-2xl p-6 sm:p-7 relative border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} p-0.5 shadow-md shrink-0`}>
                    <div className="w-full h-full bg-[#0a0e19] rounded-[10px] flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                      {cert.issuer}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>

              <p className="text-xs font-mono text-slate-400 mb-4">
                Category: <span className="text-slate-200">{cert.category}</span>
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-slate-900 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

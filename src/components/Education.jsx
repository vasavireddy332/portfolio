import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../config';

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-[#06080e] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest">
              ACADEMIC FOUNDATION
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Education <span className="text-gradient-cyan-violet">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 sm:p-10 border border-cyan-500/30 relative overflow-hidden group shadow-[0_0_40px_rgba(6,182,212,0.1)]"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 p-0.5 shadow-lg">
                  <div className="w-full h-full bg-[#0a0e19] rounded-[14px] flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-cyan-300 animate-bounce" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    {PERSONAL_INFO.degree}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400">
                    {PERSONAL_INFO.university}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-sm font-bold shadow-md">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>CGPA: {PERSONAL_INFO.cgpa}</span>
              </div>
            </div>

            {/* Meta row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span className="text-xs text-slate-300">
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-mono">
                  2023 – {PERSONAL_INFO.graduation} (Pursuing)
                </span>
              </div>
            </div>

            {/* Core Coursework Focus */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Technical Coursework:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Database Management Systems (DBMS)',
                  'Object-Oriented Programming (Python/C)',
                  'Operating Systems & Networking',
                  'Data Science Fundamentals',
                  'Software Engineering',
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-700/80"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

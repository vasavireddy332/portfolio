import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';

export default function CurrentFocus() {
  const cards = [
    { name: 'Python', icon: '🐍', tag: 'Data & Backend Scripts', border: 'border-cyan-500/40' },
    { name: 'Data Analytics', icon: '📊', tag: 'Trends & Insights', border: 'border-violet-500/40' },
    { name: 'Data Science', icon: '🧠', tag: 'Exploratory Modeling', border: 'border-blue-500/40' },
    { name: 'Power BI', icon: '📈', tag: 'Interactive Dashboards', border: 'border-yellow-500/40' },
    { name: 'SQL', icon: '🗄', tag: 'Advanced Aggregations', border: 'border-teal-500/40' },
    { name: 'Generative AI', icon: '🤖', tag: 'Analytics Automation', border: 'border-purple-500/40' },
  ];

  return (
    <section className="relative py-20 bg-[#06080e] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest">
              CURRENT EXPLORATION
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Learning. Building. <span className="text-gradient-cyan-violet">Improving.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
            Continuously strengthening my foundations in Python, SQL, data analytics, data visualization and AI while building practical projects.
          </p>
        </div>

        {/* Floating Cards row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`glass-card rounded-2xl p-4 text-center border ${card.border} hover:scale-105 transition-all duration-300 group cursor-default`}
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                {card.name}
              </h3>
              <span className="text-[10px] font-mono text-slate-400 block mt-1">
                {card.tag}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

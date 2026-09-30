import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight, Sparkles, MessageSquare, Check } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Prefilled mailto link trigger fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSentSuccess(true);
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#06080e] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Let's Build Something <span className="text-gradient-cyan-violet">with Data.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mt-3">
            Have an opportunity, project or idea? I'd love to connect.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Contact Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Left Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 border border-cyan-500/30 flex flex-col justify-between group hover:border-cyan-400"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 shadow-lg mb-6">
                <div className="w-full h-full bg-[#0a0e19] rounded-[14px] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-300 group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Direct Email Communication
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Email Me
              </h3>
              <p className="text-slate-300 font-mono text-sm sm:text-base mb-6 break-all">
                {PERSONAL_INFO.email}
              </p>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              data-cursor="EMAIL"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all w-fit"
            >
              <span>Send Email</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 border border-violet-500/30 flex flex-col justify-between group hover:border-violet-400"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-0.5 shadow-lg mb-6">
                <div className="w-full h-full bg-[#0a0e19] rounded-[14px] flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-violet-300 group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <span className="text-xs font-mono text-violet-400 uppercase tracking-wider block mb-1">
                Professional Network
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Connect on LinkedIn
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Connect for internship inquiries, data analyst positions, or technical collaboration.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
              >
                <span>View LinkedIn</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="inline-flex items-center space-x-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900 border border-slate-700 hover:border-cyan-400 transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Contact Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <h3 className="font-heading font-bold text-xl text-white">
              Send a Direct Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Vasavi Kadari"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm font-sans transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="recruiter@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm font-sans transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                Message Content
              </label>
              <textarea
                required
                rows="4"
                placeholder="Hi Vasavi, we looked at your Data Analytics portfolio and would like to discuss an opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm font-sans transition-all"
              />
            </div>

            <button
              type="submit"
              data-cursor="SEND MESSAGE"
              className="w-full py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center space-x-2 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {sentSuccess ? (
                <>
                  <Check className="w-5 h-5 text-emerald-950" />
                  <span>Opening Email Client...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Message →</span>
                </>
              )}
            </button>

            <p className="text-[11px] font-mono text-slate-400 text-center">
              * Launches your mail client with prefilled details directly addressed to vasavireddy2006@gmail.com
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

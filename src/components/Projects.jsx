import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, Terminal, BarChart, Server, Layers, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { Github } from './Icons';
import { PERSONAL_INFO } from '../config';

export default function Projects() {
  const projectsData = [
    {
      id: 'global-ecommerce',
      title: 'Global E-Commerce Sales Analysis',
      subtitle: 'Enterprise SQL & Financial Revenue Modeling',
      description:
        'SQL-based analysis of global e-commerce sales data to uncover revenue patterns, country performance, product-category trends and high-value transactions.',
      technologies: ['SQL Server', 'T-SQL', 'Excel', 'CTE & Window Functions'],
      highlights: [
        'Revenue analysis & country-wise performance ranking',
        'Product category trend breakdown & seasonal analysis',
        'Outlier transaction detection using window functions',
        'Sales growth & monthly revenue window aggregations',
      ],
      githubUrl: 'https://github.com/vasavireddy332/Global_Ecommerce_analysis',
      icon: Database,
      accentColor: 'from-cyan-500 to-blue-600',
      badge: 'Featured SQL Project',
      visualType: 'sql-query',
    },
    {
      id: 'online-retail-sales',
      title: 'Online Retail Sales Analysis',
      subtitle: 'Business-Focused Database Design & Aggregations',
      description:
        'Business-focused SQL analysis of retail sales data covering customer behavior, product performance, revenue and sales trends.',
      technologies: ['SQL', 'Database Design', 'Joins', 'Aggregations', 'Subqueries'],
      highlights: [
        'Customer spending behavior & repeat purchase ratios',
        'Top-selling product categories & Average Order Value (AOV)',
        'Normalized schema design (Customers, Products, Orders)',
        'Monthly sales trends & customer RFM segmentation',
      ],
      githubUrl: 'https://github.com/vasavireddy332/SQL_RETAIL_SALES_P2',
      icon: BarChart,
      accentColor: 'from-violet-500 to-purple-600',
      badge: 'Featured SQL Analytics',
      visualType: 'chart-dashboard',
    },
    {
      id: 'customer-trends',
      title: 'Customer Trends Data Analysis',
      subtitle: 'End-to-End Analytics Workflow with Power BI',
      description:
        'End-to-end customer analytics workflow combining SQL, Python and Power BI to transform transaction data into actionable business insights.',
      technologies: ['SQL', 'Python', 'Power BI', 'DAX', 'Pandas'],
      highlights: [
        'Data extraction with SQL & automated Python wrangling',
        'Power BI dashboard with dynamic DAX KPI metrics',
        'Customer churn risk identification & cohort analytics',
        'Executive business summary & interactive reporting',
      ],
      githubUrl: PERSONAL_INFO.github,
      icon: Layers,
      accentColor: 'from-yellow-400 to-amber-600',
      badge: 'Power BI & Python',
      visualType: 'power-bi',
    },
    {
      id: 'fastapi-ecommerce',
      title: 'FastAPI E-Commerce CRUD API',
      subtitle: 'RESTful Microservices & MySQL Integration',
      description:
        'RESTful E-Commerce API built with FastAPI for managing product data with MySQL database integration.',
      technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'Pydantic', 'Uvicorn'],
      highlights: [
        'Asynchronous REST API endpoints for product CRUD',
        'SQLAlchemy ORM integration with MySQL relational DB',
        'Pydantic schema validation & automated OpenAPI documentation',
        'Robust error handling & production Uvicorn server setup',
      ],
      githubUrl: PERSONAL_INFO.github,
      icon: Server,
      accentColor: 'from-teal-400 to-emerald-600',
      badge: 'FastAPI & Backend',
      visualType: 'api-spec',
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#06080e] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest">
              PORTFOLIO SHOWCASE
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Selected <span className="text-gradient-cyan-violet">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Projects where data, software and problem-solving come together.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Explore All Projects CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="EXPLORE ALL"
            className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-sm text-cyan-300 bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-950/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            <Github className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="font-heading tracking-wide">Explore All Repositories on GitHub</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}

// Single Project Card Component with 3D Mouse Tilt Effect
function ProjectCard({ project, index }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const Icon = project.icon;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      data-cursor="VIEW REPO"
      className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group border border-white/10 hover:border-cyan-400/50 shadow-2xl"
    >
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{project.badge}</span>
          </div>
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${project.accentColor} p-0.5 shadow-md`}>
            <div className="w-full h-full bg-[#0a0e19] rounded-[10px] flex items-center justify-center">
              <Icon className="w-4 h-4 text-cyan-300 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-cyan-400/90 mb-3">
          {project.subtitle}
        </p>

        {/* Project Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Custom Visual Abstract Graphics */}
        <div className="mb-6 rounded-xl bg-[#04060b] border border-slate-800 p-4 font-mono text-xs overflow-hidden">
          {project.visualType === 'sql-query' && (
            <div className="space-y-1 text-slate-300">
              <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-1 mb-2">
                <span>SQL WINDOW FUNCTIONS</span>
                <span className="text-cyan-400">T-SQL</span>
              </div>
              <p className="text-purple-400">SELECT <span className="text-cyan-300">Country, DENSE_RANK() OVER (ORDER BY SUM(Revenue) DESC)</span></p>
              <p className="text-purple-400">FROM <span className="text-white">ecom_sales</span> <span className="text-emerald-400">GROUP BY Country</span>;</p>
              {/* Animated mini bar visualization */}
              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-end space-x-2 h-10">
                <div className="w-1/5 bg-cyan-500/40 h-full rounded-t" />
                <div className="w-1/5 bg-cyan-400/80 h-[80%] rounded-t" />
                <div className="w-1/5 bg-violet-500/70 h-[65%] rounded-t" />
                <div className="w-1/5 bg-cyan-500/50 h-[45%] rounded-t" />
                <div className="w-1/5 bg-blue-500/60 h-[90%] rounded-t" />
              </div>
            </div>
          )}

          {project.visualType === 'chart-dashboard' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-1">
                <span>CUSTOMER REVENUE COHORT</span>
                <span className="text-violet-400">RELATIONAL DB</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">Avg Order</span>
                  <span className="text-cyan-300 font-bold">$142.50</span>
                </div>
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">Repeat Rate</span>
                  <span className="text-teal-400 font-bold">48.2%</span>
                </div>
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">Top Category</span>
                  <span className="text-violet-300 font-bold">Electronics</span>
                </div>
              </div>
            </div>
          )}

          {project.visualType === 'power-bi' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-1">
                <span>POWER BI KPI MEASURES</span>
                <span className="text-yellow-400">DAX</span>
              </div>
              <p className="text-yellow-300/90 text-[11px]">
                Total_Sales = CALCULATE(SUM(Orders[Amount]), USERELATIONSHIP(...))
              </p>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-yellow-400 to-amber-500" />
              </div>
            </div>
          )}

          {project.visualType === 'api-spec' && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-1">
                <span>FASTAPI ENDPOINTS</span>
                <span className="text-emerald-400">SWAGGER UI</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px]">
                <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold">GET</span>
                <span className="text-slate-300">/api/v1/products/list</span>
                <span className="text-emerald-400 ml-auto">200 OK</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px]">
                <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 font-bold">POST</span>
                <span className="text-slate-300">/api/v1/products/create</span>
                <span className="text-cyan-400 ml-auto">201 Created</span>
              </div>
            </div>
          )}
        </div>

        {/* Highlights Bullet List */}
        <div className="space-y-2 mb-6">
          <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
            Project Highlights:
          </span>
          <ul className="space-y-1.5">
            {project.highlights.map((item, i) => (
              <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action GitHub Link Button */}
      <div className="pt-4 border-t border-white/10">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="GITHUB"
          className="group/btn inline-flex items-center space-x-2 font-semibold text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>View on GitHub</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-1.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

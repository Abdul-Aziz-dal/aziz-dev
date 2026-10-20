"use client";

import React from "react";
import {
  Code2,
  Server,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Brain,
  Database,
} from "lucide-react";

export default function AboutSection() {
  const philosophies = [
    {
      title: "Pragmatic Architecture Over Hype",
      description:
        "I don't chase new frameworks just because they are trending. Next.js and React are great when you need reactive, fast client interfaces; PHP and MySQL remain rock-solid for enterprise business logic and complex transactional workflows. I choose tools based on what gives customers the fastest, most reliable experience.",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Performance & Query Optimization",
      description:
        "At WebHR and HireSide, a poorly indexed query can slow down thousands of concurrent HR managers. I focus on database indexing, query refactoring, and caching hot read data with Redis. Dropping a query from 2.5 seconds to 80ms has a real, tangible impact on users.",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
    },
    {
      title: "AI That Solves Actual Business Problems",
      description:
        "AI is only as good as the reliability around it. In HireSide, parsing thousands of resumes isn't just about calling an LLM API—it's about handling corrupted PDFs, enforcing strict JSON schemas, orchestrating background retry queues, and giving recruiters transparent, actionable match reasons.",
      icon: <Brain className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "Production Reliability & Observability",
      description:
        "Shipping code is only step one. I maintain OpenAPI/Swagger documentation so teams have clear contracts, integrate Sentry APM to catch runtime exceptions before users report them, and establish background status tracking for long-running batch jobs.",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#07090e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
            About Me & Engineering Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How I Think About Building Software
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            I believe good engineering isn&apos;t about writing overly clever code—it&apos;s about building systems that are simple to understand, performant under real-world load, and easy for the team to maintain.
          </p>
        </div>

        {/* 2x2 Grid of Philosophies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophies.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700 transition-colors space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Human Background Story Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>My Background & Journey</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            I graduated with a Computer Science degree from the University of Sindh (2017–2020), where I spent years studying algorithms, relational database fundamentals, and operating systems. I started with early hands-on PHP/MySQL development at Hidaya, spent 3.5 years at Salesflo engineering retail workflow tools with Next.js and AWS, and now build full-stack ATS and HRMS platforms at Verge. Along the way, I earned the official <strong className="text-amber-300">AWS Certified Developer – Associate</strong> certification.
          </p>
        </div>
      </div>
    </section>
  );
}

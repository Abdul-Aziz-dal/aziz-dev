"use client";

import React, { useState } from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Building2,
  Layers,
} from "lucide-react";

export default function ExperienceSection() {
  const [activeExpId, setActiveExpId] = useState<string>("verge");

  const currentExp = EXPERIENCES.find((e) => e.id === activeExpId)!;

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Track Record
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            5+ years of delivering high-impact, enterprise-grade software products in human capital management, applicant tracking, and merchandising.
          </p>
        </div>

        {/* Experience Navigation Tabs (Desktop & Mobile) */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExpId(exp.id)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
                activeExpId === exp.id
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 scale-[1.02]"
                  : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{exp.company}</span>
              {exp.status && (
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {exp.status}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Experience Card */}
        <div className="rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-xl overflow-hidden p-6 sm:p-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-2xl font-bold text-white">{currentExp.role}</h3>
                {currentExp.status && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {currentExp.status}
                  </span>
                )}
              </div>
              <div className="text-lg font-semibold text-cyan-400 mt-0.5">
                {currentExp.company}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {currentExp.period}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {currentExp.location}
              </span>
            </div>
          </div>

          {/* Summary */}
          <p className="py-5 text-sm sm:text-base text-slate-300 leading-relaxed border-b border-slate-800/80">
            {currentExp.summary}
          </p>

          {/* Products Breakdown */}
          <div className="pt-6 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Core Products & Technical Contributions:
            </h4>

            <div className="space-y-6">
              {currentExp.products.map((prod, pIdx) => (
                <div
                  key={pIdx}
                  className="p-5 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h5 className="text-lg font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      {prod.name}
                    </h5>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300">
                    {prod.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {prod.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/90 text-cyan-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Achievements List */}
                  <div className="space-y-2 pt-2">
                    {prod.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


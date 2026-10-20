"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-[#07090e] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
            Work History
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Professional Experience & Track Record
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Over 5 years of full-stack engineering, building enterprise HRMS software, AI applicant tracking systems, and cloud-native merchandising platforms.
          </p>
        </div>

        {/* Timeline List (Linear, Highly Readable & Editorial) */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-6"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.status
                    ? "bg-cyan-500 border-cyan-300"
                    : "bg-slate-800 border-slate-600"
                }`}
              />

              {/* Company & Role Header */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    {exp.status && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                        {exp.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="text-base font-semibold text-cyan-400">
                  {exp.company}
                </div>
              </div>

              {/* Context Summary */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Products Breakdown */}
              <div className="space-y-5 pt-2">
                {exp.products.map((prod, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3.5"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {prod.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {prod.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {prod.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements List */}
                    <div className="space-y-1.5 pt-1">
                      {prod.achievements.map((ach, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed"
                        >
                          <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

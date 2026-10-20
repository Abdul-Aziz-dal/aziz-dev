"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import {
  FolderGit2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI & ATS", "Enterprise HRMS", "Cloud & Merchandising"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#080b12] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
            Selected Work & Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Featured Enterprise Projects
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Real software built for real enterprise workflows, ranging from AI applicant tracking systems to high-throughput HRMS databases.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-cyan-600 text-white shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-[#0b0f19] border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Meta */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-cyan-300 border border-slate-700">
                    {project.category}
                  </span>
                  <span>{project.period}</span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mt-0.5">
                    {project.subtitle} • <span className="text-slate-400">{project.clientOrCompany}</span>
                  </p>
                </div>

                {/* Metrics Chips */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center p-2 rounded-lg bg-slate-900/80">
                        <div className="text-sm font-extrabold text-white">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Stack */}
              <div className="pt-5 mt-5 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.category === "AI & ATS" && (
                  <div className="pt-1">
                    <a
                      href="#ai-case-study"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Try the interactive resume parser simulation</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

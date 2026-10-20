"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import {
  FolderGit2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Cpu,
} from "lucide-react";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI & ATS", "Enterprise HRMS", "Cloud & Merchandising"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#07090e] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Production Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Platforms & Scaled Projects
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            High-scale architectures, AI-integrated workflows, and mission-critical enterprise platforms engineered with Next.js, PHP, Redis, and AWS.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0b0f19] border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header Chips */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {project.period}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-400/90 font-medium mt-1">
                    {project.subtitle} • <span className="text-slate-400">{project.clientOrCompany}</span>
                  </p>
                </div>

                {/* Metrics row if available */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/80">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center p-2 rounded-lg bg-slate-900/80">
                        <div className="text-sm sm:text-base font-extrabold text-white">
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
                <div className="space-y-2 pt-1">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Stack */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.category === "AI & ATS" && (
                  <div className="pt-1">
                    <a
                      href="#ai-demo"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Test Live AI Simulator for this system</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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


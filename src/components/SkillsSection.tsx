"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Layout,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  Wrench,
  Search,
} from "lucide-react";

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case "Server":
        return <Server className="w-4 h-4 text-indigo-400" />;
      case "Database":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "Cloud":
        return <Cloud className="w-4 h-4 text-amber-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-4 h-4 text-rose-400" />;
      default:
        return <Wrench className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#07090e] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
              Technical Proficiencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tools & Technologies I Work With
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              Every tool in this stack has been tested in high-concurrency production environments across HRMS, ATS, and cloud applications.
            </p>
          </div>

          {/* Clean Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Next.js, Redis, PHP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((category, idx) => {
            const filteredSkills = searchQuery
              ? category.skills.filter((s) =>
                  s.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
              : category.skills;

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 mt-3">
                    {filteredSkills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 text-xs"
                      >
                        <span className="font-medium text-slate-200">
                          {skill.name}
                        </span>

                        {skill.badge && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-cyan-300">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

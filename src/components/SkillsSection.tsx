"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Cpu,
  Layout,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  Wrench,
  Search,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-rose-400" />;
      default:
        return <Wrench className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills & Technologies
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Battle-tested across production enterprise platforms, AWS cloud services, and real-world LLM pipelines.
          </p>

          {/* Quick Search Filter */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Next.js, Redis, AWS, PHP, LLM)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="rounded-2xl bg-[#0b0f19] border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-4 space-y-2">
                    {filteredSkills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs"
                      >
                        <span className="font-medium text-slate-200">
                          {skill.name}
                        </span>

                        <div className="flex items-center gap-1.5">
                          {skill.badge && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                              {skill.badge}
                            </span>
                          )}
                          <span className="text-[11px] text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{filteredSkills.length} Verified Proficiencies</span>
                  <span className="text-emerald-400 font-medium">Production Tested</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


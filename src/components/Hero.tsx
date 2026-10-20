"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO, KEY_METRICS } from "@/data/portfolioData";
import {
  Sparkles,
  ArrowRight,
  FileText,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Award,
  Terminal,
  Cpu,
  Database,
  Cloud,
  CheckCircle2,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 to-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Certification Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Senior Roles
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-3.5 h-3.5" />
                AWS Certified Developer – Associate
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                AI / LLM Integration Specialist
              </span>
            </div>

            {/* Name & Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Abdul Aziz Dal
                </span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-300">
                Senior Full Stack Developer & AI Solutions Engineer
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              5+ years of engineering enterprise web platforms, modern HRMS architectures, and high-concurrency Applicant Tracking Systems (ATS). Experienced in building high-performance{" "}
              <span className="text-slate-200 font-semibold">Next.js & React</span> frontends, scalable{" "}
              <span className="text-slate-200 font-semibold">PHP & Redis</span> backend services, and production{" "}
              <span className="text-cyan-400 font-semibold">AI/LLM workflows</span> for resume parsing and candidate-job matching.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#ai-demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Try AI Matcher Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/80 transition-all hover:border-slate-600"
              >
                <span>View Flagship Projects</span>
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 border border-cyan-500/30 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Print / Save CV</span>
              </Link>
            </div>

            {/* Quick Contact & Info Pills */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors cursor-pointer bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 ml-1" />
                )}
              </button>

              <button
                onClick={copyPhone}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors cursor-pointer bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.phoneFormatted}</span>
                {copiedPhone ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 ml-1" />
                )}
              </button>

              <div className="inline-flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Karachi, Sindh, Pakistan</span>
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal & Engineering Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-[#111726] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      aziz-dev@stack:~$
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    Production Stack
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-5 space-y-4 text-xs font-mono">
                  {/* Profile & Photo Header */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
                    <div className="relative shrink-0">
                      <img
                        src="/abdul-aziz-dal.jpg"
                        alt="Abdul Aziz Dal — Senior Full Stack Developer"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-cyan-500/50 shadow-md shadow-cyan-500/20"
                      />
                      <span
                        className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#0b0f19] rounded-full animate-pulse"
                        title="Online & Available"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-slate-200 font-bold text-sm sm:text-base font-sans truncate">
                          Abdul Aziz Dal
                        </span>
                        <span className="text-emerald-400 font-semibold text-[10px]">
                          ACTIVE
                        </span>
                      </div>
                      <div className="text-cyan-400 font-semibold text-xs mt-0.5">
                        Verge (Private) Limited
                      </div>
                      <div className="text-slate-400 text-[11px] truncate mt-0.5">
                        Senior Developer • HireSide (ATS) & WebHR
                      </div>
                    </div>
                  </div>

                  {/* Core Tech Breakdown */}
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                      <div className="text-cyan-400 font-semibold flex items-center gap-1 mb-1">
                        <Cpu className="w-3 h-3" /> Frontend
                      </div>
                      <div className="text-slate-300">Next.js 14/15, React.js</div>
                      <div className="text-slate-500">MUI, Tailwind, TS</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                      <div className="text-indigo-400 font-semibold flex items-center gap-1 mb-1">
                        <Database className="w-3 h-3" /> Backend
                      </div>
                      <div className="text-slate-300">PHP REST APIs</div>
                      <div className="text-slate-500">MySQL, Redis Caching</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                      <div className="text-amber-400 font-semibold flex items-center gap-1 mb-1">
                        <Cloud className="w-3 h-3" /> Cloud & AWS
                      </div>
                      <div className="text-slate-300">Lambda, Athena, S3</div>
                      <div className="text-slate-500">RDS, Route 53, DNS</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                      <div className="text-emerald-400 font-semibold flex items-center gap-1 mb-1">
                        <Sparkles className="w-3 h-3" /> AI Engine
                      </div>
                      <div className="text-slate-300">Resume Parser & Match</div>
                      <div className="text-slate-500">LLM APIs, Queue Workers</div>
                    </div>
                  </div>

                  {/* Key Production Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Optimized queries + Redis caching for high-load HRMS</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Built resilient queue retry pipelines for bulk resume uploads</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Integrated Sentry APM & OpenAPI documentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all hover:-translate-y-0.5"
            >
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  ArrowRight,
  FileText,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Award,
  MessageSquare,
  Sparkles,
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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-800/80 bg-gradient-to-b from-[#0a0d16] via-[#090b12] to-[#07090e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card: Human, Friendly & Authentic */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-14">
          {/* Left: Bio & Intro */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Senior Roles
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/25">
                <Award className="w-3.5 h-3.5" />
                AWS Certified Developer
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                Karachi, Pakistan
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Hey, I&apos;m{" "}
                <span className="text-cyan-400">Abdul Aziz Dal</span>.
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-slate-300">
                Senior Full Stack Developer & AI Solutions Engineer
              </p>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I build and scale high-concurrency web platforms, HR management systems, and practical AI workflows.
              Currently at <strong className="text-white font-semibold">Verge</strong>, I lead engineering on{" "}
              <strong className="text-white font-semibold">HireSide (ATS)</strong> and help maintain{" "}
              <strong className="text-white font-semibold">WebHR (HRMS)</strong>. Previously, I spent over 3 years at{" "}
              <strong className="text-white font-semibold">Salesflo</strong> building enterprise merchandising software with Next.js, React, and AWS.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ai-case-study"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>AI Case Study</span>
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Resume / CV</span>
              </Link>
            </div>

            {/* Contact Pills */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs text-slate-400">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 hover:text-white transition-colors"
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
                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 hover:text-white transition-colors"
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

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-950/40 hover:bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/30 text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: Human Portrait Photo */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative group">
              {/* Subtle backplate glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-600/30 to-indigo-600/30 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl w-48 h-56 sm:w-56 sm:h-64">
                <img
                  src="/abdul-aziz-dal.jpg"
                  alt="Abdul Aziz Dal — Senior Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Status pill under photo */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 border border-slate-700 px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 text-[11px] font-medium text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Senior Software Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Honest Quick Numbers (Human & Grounded) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">5+ Years</div>
            <div className="text-xs text-slate-400 mt-0.5">Professional Experience</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">3 Products</div>
            <div className="text-xs text-slate-400 mt-0.5">Scaled at Enterprise Level</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">AWS Cert</div>
            <div className="text-xs text-slate-400 mt-0.5">Certified Developer (Associate)</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">AI in Prod</div>
            <div className="text-xs text-slate-400 mt-0.5">Resume Parsing & Matching</div>
          </div>
        </div>
      </div>
    </section>
  );
}

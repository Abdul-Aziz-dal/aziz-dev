"use client";

import React from "react";
import { CERTIFICATION, EDUCATION } from "@/data/portfolioData";
import { Award, GraduationCap, Calendar, CheckCircle2, Cloud, ShieldCheck } from "lucide-react";

export default function EducationCertifications() {
  return (
    <section className="py-20 md:py-28 bg-[#07090e] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Academics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certification & Education
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Formally certified cloud developer with rigorous computer science foundations.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AWS Certification Card */}
          <div className="rounded-2xl bg-[#0b0f19] border border-amber-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  <Cloud className="w-3.5 h-3.5" />
                  Official Credential
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Issued: {CERTIFICATION.year}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {CERTIFICATION.title}
                </h3>
                <p className="text-sm font-semibold text-amber-400 mt-0.5">
                  {CERTIFICATION.issuer}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {CERTIFICATION.description}
              </p>

              {/* Verified domains */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Serverless Architecture & Event-Driven Workflows (AWS Lambda)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Cloud Object Storage & Security Policies (Amazon S3)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Analytical SQL Querying on Big Datasets (Amazon Athena)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>DNS, Custom Domains & SSL Management (Amazon Route 53)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" /> Verified Cloud Developer
              </span>
              <span>Level: Associate</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="rounded-2xl bg-[#0b0f19] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Undergraduate Degree
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {EDUCATION.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {EDUCATION.degree}
                </h3>
                <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                  {EDUCATION.institution}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {EDUCATION.description}
              </p>

              {/* Core Academics */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Data Structures, Analysis of Algorithms & Complexity</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Relational Database Management Systems (RDBMS & SQL)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Software Engineering Methodologies & OOP Design Patterns</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Computer Networks, Web Architecture & Operating Systems</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Major: Computer Science</span>
              <span>4-Year BS Degree</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


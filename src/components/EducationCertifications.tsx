"use client";

import React from "react";
import { CERTIFICATION, EDUCATION } from "@/data/portfolioData";
import { Award, GraduationCap, CheckCircle2, ShieldCheck } from "lucide-react";

export default function EducationCertifications() {
  return (
    <section className="py-16 md:py-24 bg-[#080b12] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
            Credentials & Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Certification & Education
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Formally certified cloud developer backed by a 4-year rigorous Computer Science foundation.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AWS Certification Card */}
          <div className="p-6 rounded-2xl bg-[#0b0f19] border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/25">
                  <Award className="w-3.5 h-3.5" />
                  Official Credential
                </span>
                <span className="text-xs text-slate-400">
                  Issued: {CERTIFICATION.year}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {CERTIFICATION.title}
                </h3>
                <p className="text-xs font-semibold text-amber-300 mt-0.5">
                  {CERTIFICATION.issuer}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {CERTIFICATION.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>AWS Lambda, API Gateway & Serverless Workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Amazon S3 Cloud Storage & Access Policies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Amazon Athena SQL Queries on Data Lakes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Amazon Route 53 DNS & Custom Domains</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Developer
              </span>
              <span>Amazon Web Services</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-[#0b0f19] border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-cyan-300 border border-slate-700">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Undergraduate Degree
                </span>
                <span className="text-xs text-slate-400">
                  {EDUCATION.period}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {EDUCATION.degree}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                  {EDUCATION.institution}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {EDUCATION.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Data Structures, Algorithms & Complexity Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Relational Databases (RDBMS), SQL & Schema Normalization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Object-Oriented Programming (OOP) & Clean Code Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Operating Systems, Networking & Web Protocols</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Major: Computer Science</span>
              <span>4-Year BS Degree</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

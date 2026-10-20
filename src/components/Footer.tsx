"use client";

import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Heart, Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070c] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white text-base">
                Abdul Aziz Dal
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                Senior Full Stack & AI Developer
              </span>
            </div>
            <p className="text-slate-400 text-xs">
              Architecting enterprise HRMS, ATS, and AI-powered recruitment workflows.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2025 Abdul Aziz Dal. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/resume" className="hover:text-cyan-400 transition-colors">
              Printable Resume
            </Link>
            <span>•</span>
            <a href="#overview" className="hover:text-cyan-400 transition-colors">
              Back to Overview
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

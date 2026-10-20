"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Menu,
  X,
  FileText,
  Sparkles,
  Phone,
  Mail,
  Check,
  Copy,
  ChevronRight,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "AI Simulator", href: "#ai-demo" },
    { label: "Architecture", href: "#architecture" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative">
              <img
                src="/abdul-aziz-dal.jpg"
                alt="Abdul Aziz Dal"
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-cyan-500/40 group-hover:ring-cyan-400 transition-all shadow-md shadow-cyan-500/20 group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#07090e] rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 group-hover:text-cyan-400 transition-colors text-base tracking-tight">
                  Abdul Aziz Dal
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Senior Full Stack & AI Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-sm shadow-cyan-500/25 transition-all hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17]/95 border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3 backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume (Print Ready)</span>
            </Link>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full text-center py-2 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

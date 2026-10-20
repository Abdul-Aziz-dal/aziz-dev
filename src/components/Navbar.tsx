"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Menu,
  X,
  FileText,
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
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "AI Case Study", href: "#ai-case-study" },
    { label: "Tech Stack", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#090b11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-sm shadow-black/20 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Photo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative">
              <img
                src="/abdul-aziz-dal.jpg"
                alt="Abdul Aziz Dal"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-700 group-hover:ring-cyan-500 transition-all"
              />
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#090b11] rounded-full"
                title="Available for opportunities"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors text-sm sm:text-base">
                  Abdul Aziz Dal
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Available
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Senior Full Stack & AI Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 px-3 py-1.5 rounded-full border border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-colors"
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1017] border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-xl">
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
              className="w-full text-center py-2.5 rounded-lg text-xs font-semibold bg-cyan-600 text-white flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (Print Ready)</span>
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

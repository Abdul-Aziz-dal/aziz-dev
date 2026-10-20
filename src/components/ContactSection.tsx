"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoLink, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#07090e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            I&apos;m currently open to Senior Full Stack, Tech Lead, and AI Engineering roles. Whether you have a project, an opening on your team, or just want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="md:col-span-5 space-y-4">
            {/* Profile Intro Card */}
            <div className="p-5 rounded-2xl bg-[#0b0f19] border border-slate-800 space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/abdul-aziz-dal.jpg"
                  alt="Abdul Aziz Dal"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-700"
                />
                <div>
                  <h3 className="text-base font-bold text-white">Abdul Aziz Dal</h3>
                  <p className="text-xs text-cyan-400">Senior Full Stack Developer</p>
                  <p className="text-[11px] text-slate-400">Karachi, Sindh, Pakistan</p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                {/* Email */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5 truncate mr-2">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-slate-200 hover:text-white truncate font-medium"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-slate-200 hover:text-white font-medium"
                    >
                      {PERSONAL_INFO.phoneFormatted}
                    </a>
                  </div>
                  <button
                    onClick={copyPhone}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 flex items-center justify-center gap-1.5 text-xs font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 text-xs font-medium transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="md:col-span-7">
            <div className="p-6 rounded-2xl bg-[#0b0f19] border border-slate-800">
              <h3 className="text-base font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Drop your details below and I&apos;ll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-300">
                    Your email client has been launched with your note. You can also write directly to{" "}
                    <span className="text-cyan-400">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs text-cyan-400 underline pt-2 block mx-auto"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Opportunity / Collaboration / Consultation"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Aziz, I'd like to discuss a role/project with you..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

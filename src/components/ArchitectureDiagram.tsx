"use client";

import React, { useState } from "react";
import {
  Layers,
  Server,
  Database,
  Cloud,
  Cpu,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ArchNode {
  id: string;
  layer: string;
  title: string;
  technologies: string[];
  description: string;
  keyResponsibilities: string[];
  metrics: string;
}

const ARCH_NODES: ArchNode[] = [
  {
    id: "frontend",
    layer: "Layer 1: Presentation & Client Tier",
    title: "Next.js & React Full-Stack Interfaces",
    technologies: ["Next.js (App Router)", "React.js", "Tailwind CSS", "MUI", "WhatsApp Business"],
    description:
      "Modern SSR and SPA interfaces powering candidate management, employer job portals, real-time dashboards, and candidate communication channels.",
    keyResponsibilities: [
      "Dynamic routing and multi-tenant URL behavior for enterprise customers",
      "Interactive candidate evaluation forms and real-time scorecards",
      "Instant WhatsApp notifications and candidate updates via webhook integration",
      "Optimized client state management and smooth bulk-upload dropzones",
    ],
    metrics: "Sub-second client hydration & responsive mobile views",
  },
  {
    id: "gateway",
    layer: "Layer 2: API Gateway & Business Engine",
    title: "Enterprise PHP REST Services & OpenAPI",
    technologies: ["PHP", "REST APIs", "OpenAPI 3.0", "RBAC", "Custom Field Engine"],
    description:
      "Core enterprise business logic, role-based permission validation, and dynamic custom field filtering across HRMS and ATS modules.",
    keyResponsibilities: [
      "Strict OpenAPI/Swagger documented endpoints for UserList, MemberList, and JobList",
      "Multi-tier permission management for HR Managers, Recruiters, and Contributors",
      "Automated evaluation processing converting interview inputs to dynamic Excel reports",
      "Centralized request validation and sanitized payload ingestion",
    ],
    metrics: "100% OpenAPI 3.0 documented REST endpoints",
  },
  {
    id: "queue",
    layer: "Layer 3: Caching, Queues & Reliability",
    title: "Redis Distributed Cache & Background Workers",
    technologies: ["Redis", "Queue Workers", "Sentry APM", "Exponential Retries"],
    description:
      "Decoupled asynchronous processing layer handling compute-heavy tasks like bulk resume extraction, email dispatch, and database query caching.",
    keyResponsibilities: [
      "Sub-millisecond query caching layer eliminating repeated SQL hits for high-volume endpoints",
      "Job-wise attempt tracking, error logging, and retry queues for failed parse tasks",
      "Continuous production monitoring with Sentry APM for instant exception triage",
      "Automated email notifications triggered on batch status completion",
    ],
    metrics: "85%+ Redis cache hit rate & 0% data drop on parse retries",
  },
  {
    id: "ai-cloud",
    layer: "Layer 4: AI Engine & Cloud Analytics",
    title: "LLM Resume Parser & AWS Analytics",
    technologies: ["LLM APIs", "AWS Lambda", "Amazon Athena", "Amazon S3"],
    description:
      "AI intelligence extraction pipeline paired with serverless cloud querying for large-scale data analysis.",
    keyResponsibilities: [
      "Zero-shot and few-shot LLM prompts to extract structured JSON entities from unstructured PDF/Word CVs",
      "5-dimensional candidate scoring algorithm weighing skills, tenure, education, and domain relevance",
      "AWS Lambda functions running serverless compute for event-driven workflows",
      "Amazon Athena queries running direct SQL across multi-gigabyte S3 data lake files",
    ],
    metrics: "98% entity extraction accuracy & serverless big data analytics",
  },
  {
    id: "database",
    layer: "Layer 5: Data Persistence & Cloud Hosting",
    title: "Optimized MySQL & AWS Cloud Infrastructure",
    technologies: ["MySQL", "Amazon RDS", "Amazon S3", "Amazon Route 53", "DNS"],
    description:
      "Rock-solid database architecture optimized with proper indexing, composite keys, and secure cloud storage for documents and media assets.",
    keyResponsibilities: [
      "Deep SQL query optimization (composite indexing, query refactoring, eliminating N+1 queries)",
      "Secure encrypted document storage in Amazon S3 for resumes, contracts, and evaluation files",
      "Amazon Route 53 DNS routing, SSL certificates, and custom domain mapping for clients",
      "Strict data integrity, foreign key constraints, and transactional consistency",
    ],
    metrics: "3.5x faster complex database query executions",
  },
];

export default function ArchitectureDiagram() {
  const [activeNodeId, setActiveNodeId] = useState<string>("ai-cloud");

  const activeNode = ARCH_NODES.find((n) => n.id === activeNodeId)!;

  return (
    <section id="architecture" className="py-20 md:py-28 bg-[#07090e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Enterprise System Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Architecture & Engineering Pipeline
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            How Abdul Aziz architects enterprise ATS and HRMS platforms for high throughput, sub-second latency, and fault-tolerant AI processing. Click any layer to inspect implementation details.
          </p>
        </div>

        {/* Interactive Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Layer Flow */}
          <div className="lg:col-span-6 space-y-3">
            {ARCH_NODES.map((node, index) => {
              const isSelected = node.id === activeNodeId;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer relative group ${
                    isSelected
                      ? "bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/10 -translate-y-0.5"
                      : "bg-[#0b0f19] border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                          isSelected
                            ? "bg-cyan-500 text-black"
                            : "bg-slate-800 text-slate-400 group-hover:text-white"
                        }`}
                      >
                        0{index + 1}
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                          {node.layer}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {node.title}
                        </h4>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-cyan-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                      }`}
                    />
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-2.5 ml-10">
                    {node.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-cyan-950/80 text-cyan-300 border border-cyan-800/50"
                            : "bg-slate-800/60 text-slate-400"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Inspector */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 rounded-2xl bg-[#0b0f19] border border-cyan-500/30 p-6 sm:p-7 shadow-2xl relative">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  Production Ready
                </span>
              </div>

              <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                {activeNode.layer}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {activeNode.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeNode.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider block mb-2">
                  Integrated Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeNode.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider block">
                  Key Architectural Accomplishments:
                </span>
                {activeNode.keyResponsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Metric */}
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Production Metric:</span>
                <span className="text-xs font-bold text-cyan-300">{activeNode.metrics}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


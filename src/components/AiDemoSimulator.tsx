"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  FileCode,
  Sliders,
  Cpu,
  Brain,
  Building,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Check,
} from "lucide-react";

interface Candidate {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  education: string;
  skills: string[];
  rawSummary: string;
}

interface Job {
  id: string;
  title: string;
  company: string;
  requiredSkills: string[];
  minExperienceYears: number;
  description: string;
}

const SAMPLE_CANDIDATES: Candidate[] = [
  {
    id: "aziz",
    name: "Abdul Aziz Dal",
    title: "Senior Full Stack & AI Integration Developer",
    experienceYears: 5,
    education: "BS Computer Science (University of Sindh)",
    skills: [
      "Next.js",
      "React.js",
      "PHP",
      "MySQL",
      "Redis",
      "AWS Lambda",
      "Amazon S3",
      "Amazon Athena",
      "LLM APIs",
      "Queue Processing",
      "OpenAPI",
      "Sentry",
    ],
    rawSummary:
      "Senior engineer with 5+ years building HRMS and ATS applications. Architected AI resume parsing and matching algorithms, Redis caching layers, and serverless AWS data querying.",
  },
  {
    id: "candidate-b",
    name: "Zainab Ahmed",
    title: "Senior Frontend Engineer (React/Next)",
    experienceYears: 4,
    education: "BS Software Engineering",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux", "HTML5", "CSS3"],
    rawSummary:
      "Frontend developer specializing in scalable component libraries, micro-frontends, and client-side optimization with React and Next.js.",
  },
  {
    id: "candidate-c",
    name: "Omar Farooq",
    title: "Backend PHP & Database Specialist",
    experienceYears: 3,
    education: "BS Computer Science",
    skills: ["PHP", "Laravel", "MySQL", "PostgreSQL", "REST APIs", "Docker", "Git"],
    rawSummary:
      "Backend engineer focused on database normalization, API design, and transaction processing with PHP and relational databases.",
  },
];

const SAMPLE_JOBS: Job[] = [
  {
    id: "job-1",
    title: "Senior Full Stack Engineer (Next.js + PHP + AWS)",
    company: "Enterprise Cloud Platforms",
    requiredSkills: ["Next.js", "React.js", "PHP", "MySQL", "Redis", "AWS Lambda", "LLM APIs"],
    minExperienceYears: 4,
    description:
      "Seeking a Senior Full Stack Engineer to lead recruitment automation pipelines, optimize high-throughput MySQL/Redis databases, and build AI-enabled applicant tracking workflows.",
  },
  {
    id: "job-2",
    title: "Lead AI & Workflow Automation Engineer",
    company: "NextGen Recruitment Labs",
    requiredSkills: ["LLM APIs", "Queue Processing", "Next.js", "PHP", "MySQL", "OpenAPI"],
    minExperienceYears: 3,
    description:
      "Responsible for extracting structured candidate data from unstructured CVs, fine-tuning matching algorithms, and orchestrating background batch workers.",
  },
];

export default function AiDemoSimulator() {
  const [selectedCandidateId, setSelectedCandidateId] = useState<string>("aziz");
  const [selectedJobId, setSelectedJobId] = useState<string>("job-1");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStage, setProcessingStage] = useState<string>("");
  const [progressPct, setProgressPct] = useState<number>(0);
  const [hasRun, setHasRun] = useState(false);
  const [activeTab, setActiveTab] = useState<"scorecard" | "json">("scorecard");
  const [simulateError, setSimulateError] = useState(false);

  const selectedCandidate = SAMPLE_CANDIDATES.find((c) => c.id === selectedCandidateId)!;
  const selectedJob = SAMPLE_JOBS.find((j) => j.id === selectedJobId)!;

  // Calculate matching metrics
  const matchedSkills = selectedCandidate.skills.filter((skill) =>
    selectedJob.requiredSkills.includes(skill)
  );
  const missingSkills = selectedJob.requiredSkills.filter(
    (skill) => !selectedCandidate.skills.includes(skill)
  );

  const skillScore = Math.round((matchedSkills.length / selectedJob.requiredSkills.length) * 100);
  const expScore = Math.min(
    100,
    Math.round((selectedCandidate.experienceYears / selectedJob.minExperienceYears) * 100)
  );
  const overallScore = Math.round(skillScore * 0.65 + expScore * 0.35);

  const handleRunSimulation = () => {
    setIsProcessing(true);
    setHasRun(false);
    setProgressPct(10);
    setProcessingStage("Extracting unstructured text & stripping formatting tokens...");

    setTimeout(() => {
      setProgressPct(40);
      setProcessingStage("Validating JSON Schema via LLM structured extraction prompt...");
    }, 450);

    setTimeout(() => {
      setProgressPct(75);
      setProcessingStage("Calculating 5-tier vector relevance (skills, seniority, domain, education)...");
    }, 900);

    setTimeout(() => {
      setProgressPct(100);
      setProcessingStage("Match complete! Compiling recruiter evaluation scorecard...");
      setIsProcessing(false);
      setHasRun(true);
    }, 1350);
  };

  const structuredJsonOutput = {
    pipeline_version: "HireSide_v2.4_LLM",
    timestamp: "2025-05-15T09:30:00Z",
    extracted_candidate: {
      full_name: selectedCandidate.name,
      headline: selectedCandidate.title,
      total_experience_years: selectedCandidate.experienceYears,
      highest_education: selectedCandidate.education,
      verified_skills: selectedCandidate.skills,
    },
    job_target: {
      role_title: selectedJob.title,
      company: selectedJob.company,
      minimum_years_required: selectedJob.minExperienceYears,
    },
    scoring_matrix: {
      overall_relevance_index: `${overallScore}%`,
      skills_alignment_score: `${skillScore}%`,
      experience_seniority_score: `${expScore}%`,
      matched_skills_count: matchedSkills.length,
      missing_skills_count: missingSkills.length,
      recommendation_verdict:
        overallScore >= 85
          ? "STRONG_FIT_ADVANCE_TO_INTERVIEW"
          : overallScore >= 65
          ? "MODERATE_FIT_REVIEW_PORTFOLIO"
          : "LOW_ALIGNMENT_CONSIDER_ALTERNATIVE",
    },
    error_recovery: {
      retries_attempted: 0,
      retry_queue_status: "SUCCESS_VERIFIED",
    },
  };

  return (
    <section id="ai-demo" className="py-20 md:py-28 bg-[#090d16] border-y border-slate-800/80 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Production Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Resume Parsing & Candidate Match Engine
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Experience the real-world algorithm architecture Abdul Aziz engineered for{" "}
            <span className="text-cyan-400 font-semibold">HireSide ATS</span>. Select a candidate and job description to simulate LLM structured extraction and relevance scoring.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="bg-[#101726] p-4 sm:p-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">HireSide LLM Ingestion Pipeline</h3>
                <p className="text-xs text-slate-400">Deterministic structured data extraction & candidate scoring</p>
              </div>
            </div>

            <button
              onClick={handleRunSimulation}
              disabled={isProcessing}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white shadow-md transition-all ${
                isProcessing
                  ? "bg-slate-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-cyan-500/20 hover:scale-105 active:scale-95"
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing LLM Pipeline...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Run Live Parsing & Match</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Configuration Panels */}
          <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 border-b border-slate-800/80">
            {/* Candidate Selector */}
            <div className="lg:col-span-6 space-y-3">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                1. Select Candidate Profile (Resume Input)
              </label>

              <div className="space-y-2">
                {SAMPLE_CANDIDATES.map((cand) => (
                  <button
                    key={cand.id}
                    onClick={() => {
                      setSelectedCandidateId(cand.id);
                      setHasRun(false);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs ${
                      selectedCandidateId === cand.id
                        ? "bg-cyan-950/40 border-cyan-500/50 shadow-sm shadow-cyan-500/10"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{cand.name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-cyan-300">
                        {cand.experienceYears} Years Exp
                      </span>
                    </div>
                    <div className="text-slate-400 font-medium mt-0.5">{cand.title}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cand.skills.slice(0, 5).map((s, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-800/80 text-[10px] text-slate-300">
                          {s}
                        </span>
                      ))}
                      {cand.skills.length > 5 && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-800/80 text-[10px] text-slate-500">
                          +{cand.skills.length - 5} more
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Target Job Selector */}
            <div className="lg:col-span-6 space-y-3">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                2. Select Target Job Description
              </label>

              <div className="space-y-2">
                {SAMPLE_JOBS.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => {
                      setSelectedJobId(job.id);
                      setHasRun(false);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs ${
                      selectedJobId === job.id
                        ? "bg-indigo-950/40 border-indigo-500/50 shadow-sm shadow-indigo-500/10"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{job.title}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-indigo-300">
                        Min {job.minExperienceYears} Yrs
                      </span>
                    </div>
                    <p className="text-slate-400 mt-1 line-clamp-2">{job.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {job.requiredSkills.map((s, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-indigo-950/60 text-[10px] text-indigo-300 border border-indigo-800/40">
                          {s}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Processing Progress Bar (Visible while simulating) */}
          {isProcessing && (
            <div className="p-6 bg-slate-900/80 border-b border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-300 mb-2 font-mono">
                <span className="flex items-center gap-2 text-cyan-400">
                  <Cpu className="w-4 h-4 animate-spin" />
                  {processingStage}
                </span>
                <span className="font-bold text-white">{progressPct}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          )}

          {/* Results Output Section */}
          <div className="p-5 sm:p-6 bg-[#080c14]">
            {/* View Switcher Tabs */}
            <div className="flex items-center justify-between mb-5 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("scorecard")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "scorecard"
                      ? "bg-cyan-500 text-white"
                      : "text-slate-400 hover:text-white bg-slate-800/50"
                  }`}
                >
                  Scorecard & Recruiter Verdict
                </button>
                <button
                  onClick={() => setActiveTab("json")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all font-mono ${
                    activeTab === "json"
                      ? "bg-cyan-500 text-white"
                      : "text-slate-400 hover:text-white bg-slate-800/50"
                  }`}
                >
                  Structured JSON Schema
                </button>
              </div>

              <span className="text-[11px] text-slate-500 font-mono hidden sm:inline-block">
                Queue Status: IDLE • Sentry Monitoring: ACTIVE
              </span>
            </div>

            {/* Content Tabs */}
            {activeTab === "scorecard" ? (
              <div className="space-y-6">
                {/* Score & Verdict Banner */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div
                      className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-extrabold text-2xl border ${
                        overallScore >= 80
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : overallScore >= 60
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                          : "bg-rose-500/10 text-rose-400 border-rose-500/30"
                      }`}
                    >
                      <span>{overallScore}%</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Match</span>
                    </div>

                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">AI Recommendation</div>
                      <div className="text-base font-bold text-white mt-0.5">
                        {overallScore >= 80
                          ? "Highly Recommended (Top Tier Fit)"
                          : overallScore >= 60
                          ? "Moderate Alignment (Consider Interview)"
                          : "Low Alignment for this specific opening"}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Candidate has {selectedCandidate.experienceYears} years experience vs {selectedJob.minExperienceYears} required.
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                      <div className="text-[11px] text-slate-400">Skills Overlap</div>
                      <div className="text-lg font-bold text-cyan-400">{skillScore}%</div>
                      <div className="text-[10px] text-slate-400">
                        {matchedSkills.length} of {selectedJob.requiredSkills.length} matched
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                      <div className="text-[11px] text-slate-400">Seniority Vector</div>
                      <div className="text-lg font-bold text-indigo-400">{expScore}%</div>
                      <div className="text-[10px] text-slate-400">
                        {selectedCandidate.experienceYears}y / {selectedJob.minExperienceYears}y min
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 col-span-2 sm:col-span-1">
                      <div className="text-[11px] text-slate-400">Domain Match</div>
                      <div className="text-lg font-bold text-emerald-400">
                        {selectedCandidate.id === "aziz" ? "100%" : "75%"}
                      </div>
                      <div className="text-[10px] text-slate-400">ATS / Enterprise Exp</div>
                    </div>
                  </div>
                </div>

                {/* Skills Match Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Matched Skills */}
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified Matching Skills ({matchedSkills.length})
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {matchedSkills.length > 0 ? (
                        matchedSkills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                          >
                            <Check className="w-3 h-3 text-emerald-400" />
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-500">No overlapping skills detected</span>
                      )}
                    </div>
                  </div>

                  {/* Missing Skills */}
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Skills Gap / To Inquire in Interview ({missingSkills.length})
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {missingSkills.length > 0 ? (
                        missingSkills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-emerald-400 font-medium">
                          Zero missing skills! Perfect 100% stack coverage.
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Recruiter Evaluation Summary */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    Automated Recruiter Evaluation Brief (LLM Generated)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedCandidate.id === "aziz"
                      ? `Abdul Aziz Dal presents an ideal profile for "${selectedJob.title}". With 5+ years building both HireSide (ATS with AI parsing) and WebHR (enterprise HRMS), he brings hands-on production mastery of Next.js, PHP, Redis caching, and LLM structured extraction. Overall match confidence is 96%.`
                      : `Candidate ${selectedCandidate.name} has demonstrated competency in frontend/backend disciplines, but exhibits partial alignment with the specialized enterprise stack requirements of "${selectedJob.title}". Consider assessing adaptability in technical interview.`}
                  </p>
                </div>
              </div>
            ) : (
              /* Structured JSON View */
              <div className="relative">
                <div className="text-[11px] text-slate-400 font-mono mb-2 flex items-center justify-between">
                  <span>// Output validated against HireSide OpenAPI 3.0 extraction schema</span>
                  <span className="text-emerald-400 font-semibold">Strict JSON • 200 OK</span>
                </div>
                <pre className="p-4 rounded-xl bg-[#05080e] border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto max-h-96">
                  {JSON.stringify(structuredJsonOutput, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

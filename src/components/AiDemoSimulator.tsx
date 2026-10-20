"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  FileCode,
  Brain,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Check,
  Info,
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
    title: "Senior Full Stack & AI Developer",
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
      "LLM APIs",
      "Queue Processing",
      "OpenAPI",
    ],
    rawSummary:
      "5+ years building HRMS and ATS systems. Hands-on experience optimizing database queries, building AI resume parsing workflows, and deploying cloud services.",
  },
  {
    id: "candidate-b",
    name: "Zainab Ahmed",
    title: "Senior Frontend Developer",
    experienceYears: 4,
    education: "BS Software Engineering",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux", "HTML5", "CSS3"],
    rawSummary:
      "Frontend developer specializing in scalable component libraries, micro-frontends, and responsive user interfaces with React and Next.js.",
  },
  {
    id: "candidate-c",
    name: "Omar Farooq",
    title: "Backend PHP Engineer",
    experienceYears: 3,
    education: "BS Computer Science",
    skills: ["PHP", "Laravel", "MySQL", "REST APIs", "Docker", "Git"],
    rawSummary:
      "Backend developer focused on relational database design, REST APIs, and business logic with PHP and MySQL.",
  },
];

const SAMPLE_JOBS: Job[] = [
  {
    id: "job-1",
    title: "Senior Full Stack Engineer (Next.js + PHP + AWS)",
    company: "Enterprise Cloud Tech",
    requiredSkills: ["Next.js", "React.js", "PHP", "MySQL", "Redis", "AWS Lambda", "LLM APIs"],
    minExperienceYears: 4,
    description:
      "Looking for a Senior Full Stack Engineer to lead recruitment automation pipelines, optimize MySQL and Redis databases, and build AI-enabled applicant tracking workflows.",
  },
  {
    id: "job-2",
    title: "Frontend & UI/UX Engineer",
    company: "Digital Workspace",
    requiredSkills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    minExperienceYears: 3,
    description:
      "Seeking a frontend specialist to build accessible, high-performance dashboards with Next.js and modern component systems.",
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

  const selectedCandidate = SAMPLE_CANDIDATES.find((c) => c.id === selectedCandidateId)!;
  const selectedJob = SAMPLE_JOBS.find((j) => j.id === selectedJobId)!;

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
    setProgressPct(20);
    setProcessingStage("Reading raw resume and cleaning text tokens...");

    setTimeout(() => {
      setProgressPct(55);
      setProcessingStage("Extracting skills, tenure, and education into structured JSON...");
    }, 400);

    setTimeout(() => {
      setProgressPct(85);
      setProcessingStage("Scoring candidate match against job requirements...");
    }, 850);

    setTimeout(() => {
      setProgressPct(100);
      setProcessingStage("Done! Compiling candidate scorecard...");
      setIsProcessing(false);
      setHasRun(true);
    }, 1250);
  };

  const structuredJsonOutput = {
    pipeline: "HireSide Resume Parser (Production Simulation)",
    candidate: {
      name: selectedCandidate.name,
      role: selectedCandidate.title,
      experience_years: selectedCandidate.experienceYears,
      education: selectedCandidate.education,
      verified_skills: selectedCandidate.skills,
    },
    target_job: {
      title: selectedJob.title,
      required_experience_years: selectedJob.minExperienceYears,
      required_skills: selectedJob.requiredSkills,
    },
    evaluation_result: {
      overall_match: `${overallScore}%`,
      skills_overlap: `${skillScore}%`,
      experience_alignment: `${expScore}%`,
      matched_skills: matchedSkills,
      skills_gap: missingSkills,
      recommendation:
        overallScore >= 80
          ? "Strong candidate. Recommended for first-round interview."
          : overallScore >= 60
          ? "Moderate fit. Consider reviewing portfolio."
          : "Low alignment for this specific opening.",
    },
    reliability_notes: {
      background_queue: "Redis Worker",
      retry_policy: "3 attempts with exponential backoff on corrupt PDFs",
    },
  };

  return (
    <section id="ai-case-study" className="py-16 md:py-24 bg-[#080b12] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
            Interactive Case Study
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How I Built the HireSide AI Resume Parser
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            At <strong>HireSide</strong>, recruiters were spending hours manually reviewing resumes and re-typing information into the system. I designed and shipped an automated ingestion pipeline using LLM APIs to extract structured data from uploaded CVs and score their relevance against job descriptions.
          </p>
        </div>

        {/* Interactive Simulator Card */}
        <div className="rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-xl overflow-hidden">
          {/* Action Header */}
          <div className="p-4 sm:p-5 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-400 flex items-center justify-center">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Live Parser & Match Simulator</h3>
                <p className="text-xs text-slate-400">Select a candidate and job to see how the system evaluates fit</p>
              </div>
            </div>

            <button
              onClick={handleRunSimulation}
              disabled={isProcessing}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all ${
                isProcessing
                  ? "bg-slate-700 cursor-not-allowed"
                  : "bg-cyan-600 hover:bg-cyan-500 shadow-sm active:scale-95"
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Run Parsing & Matching</span>
                </>
              )}
            </button>
          </div>

          {/* Selectors Grid */}
          <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-slate-800">
            {/* Candidate Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-semibold text-slate-300 block">
                1. Select Candidate Resume
              </label>

              <div className="space-y-2">
                {SAMPLE_CANDIDATES.map((cand) => (
                  <button
                    key={cand.id}
                    onClick={() => {
                      setSelectedCandidateId(cand.id);
                      setHasRun(false);
                    }}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-colors ${
                      selectedCandidateId === cand.id
                        ? "bg-slate-800/90 border-cyan-500 text-white"
                        : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{cand.name}</span>
                      <span className="text-[11px] text-slate-400">{cand.experienceYears}y exp</span>
                    </div>
                    <div className="text-slate-300 mt-0.5">{cand.title}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cand.skills.slice(0, 4).map((s, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                          {s}
                        </span>
                      ))}
                      {cand.skills.length > 4 && (
                        <span className="text-[10px] text-slate-500 self-center">
                          +{cand.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Job Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-semibold text-slate-300 block">
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
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-colors ${
                      selectedJobId === job.id
                        ? "bg-slate-800/90 border-cyan-500 text-white"
                        : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{job.title}</span>
                      <span className="text-[11px] text-slate-400">Min {job.minExperienceYears}y</span>
                    </div>
                    <p className="text-slate-400 mt-1 line-clamp-2">{job.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {job.requiredSkills.map((s, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-cyan-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          {isProcessing && (
            <div className="p-4 bg-slate-900/70 border-b border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-300 mb-1.5">
                <span className="text-cyan-400">{processingStage}</span>
                <span className="font-semibold text-white">{progressPct}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-500 transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          )}

          {/* Results Area */}
          <div className="p-5 sm:p-6 bg-[#090c15]">
            {/* View Switcher */}
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("scorecard")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === "scorecard"
                      ? "bg-cyan-600 text-white"
                      : "text-slate-400 hover:text-white bg-slate-800/50"
                  }`}
                >
                  Candidate Scorecard
                </button>
                <button
                  onClick={() => setActiveTab("json")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === "json"
                      ? "bg-cyan-600 text-white"
                      : "text-slate-400 hover:text-white bg-slate-800/50"
                  }`}
                >
                  Structured JSON Output
                </button>
              </div>

              <span className="text-[11px] text-slate-400 hidden sm:inline-block">
                Evaluated against {selectedJob.title}
              </span>
            </div>

            {/* Scorecard Tab */}
            {activeTab === "scorecard" ? (
              <div className="space-y-5">
                {/* Score Summary Box */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold text-xl border ${
                        overallScore >= 80
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : overallScore >= 60
                          ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                          : "bg-rose-500/10 text-rose-400 border-rose-500/30"
                      }`}
                    >
                      <span>{overallScore}%</span>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400">Match</span>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-white">
                        {overallScore >= 80
                          ? "High Fit — Recommended for Interview"
                          : overallScore >= 60
                          ? "Moderate Alignment — Review Portfolio"
                          : "Low Alignment for this Role"}
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {selectedCandidate.name} has {selectedCandidate.experienceYears} years experience (Job asks for {selectedJob.minExperienceYears}y min).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <div className="text-right">
                      <span className="text-slate-400 block text-[11px]">Skills Overlap</span>
                      <span className="font-bold text-cyan-400 text-sm">
                        {matchedSkills.length} / {selectedJob.requiredSkills.length} ({skillScore}%)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Matched */}
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2">
                    <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      Matching Requirements ({matchedSkills.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {matchedSkills.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Missing */}
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2">
                    <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                      Skills to Assess in Interview ({missingSkills.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {missingSkills.length > 0 ? (
                        missingSkills.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-xs bg-amber-500/10 text-amber-300 border border-amber-500/20"
                          >
                            {s}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-400">
                          Complete skill alignment. No gaps found.
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Real-world engineering note from Aziz */}
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-white">Real-world production detail:</strong> When building this for HireSide, the biggest challenge was bulk uploads where recruiters uploaded 50+ CVs simultaneously. I moved all parsing to an asynchronous Redis queue with job-wise attempt tracking, ensuring the web interface stayed instant and never timed out.
                  </p>
                </div>
              </div>
            ) : (
              /* JSON View */
              <pre className="p-4 rounded-xl bg-[#05080e] border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto max-h-80">
                {JSON.stringify(structuredJsonOutput, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATION, CERTIFICATION } from "@/data/portfolioData";

export default function ResumeView() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#07090e] py-8 text-slate-200">
      {/* Top Floating Action Bar (Hidden on print) */}
      <div className="no-print max-w-4xl mx-auto px-4 mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Main Resume Sheet */}
      <main className="max-w-4xl mx-auto px-6 py-10 sm:px-12 sm:py-14 bg-[#0b0f19] border border-slate-800/80 rounded-2xl shadow-2xl print:bg-white print:text-black print:border-none print:shadow-none print:p-0 print:m-0">
        {/* Header */}
        <header className="border-b border-slate-800 print:border-slate-300 pb-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
              ABDUL AZIZ DAL
            </h1>
            <p className="text-base sm:text-lg font-semibold text-cyan-400 print:text-sky-700 mt-1">
              Senior Full Stack Developer | Next.js | React.js | PHP | AWS | AI Integration
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 print:text-slate-700 mt-3">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-slate-600" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>

              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-slate-600" />
                <span>{PERSONAL_INFO.email}</span>
              </span>

              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400 print:text-slate-600" />
                <span>{PERSONAL_INFO.location}</span>
              </span>

              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400 print:text-slate-600" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-cyan-400 print:text-sky-700"
                >
                  LinkedIn Profile
                </a>
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <img
              src="/abdul-aziz-dal.jpg"
              alt="Abdul Aziz Dal"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-2 ring-cyan-500/30 print:ring-0 shadow-lg"
            />
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-sky-800 border-b border-slate-800 print:border-slate-300 pb-1 mb-2.5">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed text-justify">
            Senior Full Stack Developer with professional experience in building and maintaining enterprise web applications, workflow management platforms, Human Resource Management Systems (HRMS), and Applicant Tracking Systems (ATS). Skilled in Next.js, React.js, PHP, JavaScript, MySQL, Redis, and AWS services.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed text-justify mt-2">
            Experienced in developing frontend and backend functionality, integrating APIs, optimizing database queries, implementing caching and background processing, and building AI-powered recruitment features such as resume parsing and candidate-job matching. Familiar with enterprise business workflows, role-based permissions, automated evaluations, production troubleshooting, and application performance optimization.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-sky-800 border-b border-slate-800 print:border-slate-300 pb-1 mb-2.5">
            Technical Skills
          </h2>
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-slate-800">
            <div>
              <strong className="text-white print:text-black">Frontend:</strong> Next.js, React.js, JavaScript, HTML5, CSS3, Bootstrap, Material UI (MUI), responsive web development
            </div>
            <div>
              <strong className="text-white print:text-black">Backend:</strong> PHP, REST APIs, web services, API integration, business logic, background processing
            </div>
            <div>
              <strong className="text-white print:text-black">Databases & Caching:</strong> MySQL, Redis, query optimization, database design
            </div>
            <div>
              <strong className="text-white print:text-black">AWS & Cloud:</strong> AWS Lambda, Amazon S3, Amazon Athena, Amazon RDS, Amazon EC2, Amazon Route 53
            </div>
            <div>
              <strong className="text-white print:text-black">AI & Automation:</strong> LLM API integration, AI resume parsing, candidate-job matching, structured data extraction, automated evaluation workflows
            </div>
            <div>
              <strong className="text-white print:text-black">Tools & Engineering:</strong> Git, GitHub, OpenAPI, Sentry, queue processing, error logging, application troubleshooting
            </div>
            <div>
              <strong className="text-white print:text-black">Deployment & Domains:</strong> Domain purchasing, DNS configuration, cloud infrastructure and deployment-related tasks
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-sky-800 border-b border-slate-800 print:border-slate-300 pb-1 mb-3">
            Professional Experience
          </h2>

          {/* Verge */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                Verge (Private) Limited — Hyderabad, Pakistan
              </h3>
              <span className="text-xs font-medium text-cyan-400 print:text-slate-700">
                May 2025 – Present
              </span>
            </div>
            <div className="text-xs font-semibold text-slate-300 print:text-slate-800 italic">
              Senior Software Developer
            </div>

            {/* Product: WebHR */}
            <div className="mt-3 pl-3 border-l-2 border-slate-800 print:border-slate-300">
              <div className="text-xs font-bold text-white print:text-black">
                Product: WebHR — Human Resource Management System (HRMS)
              </div>
              <div className="text-[11px] text-slate-400 print:text-slate-600 mb-1.5">
                Technologies: PHP, MySQL, HTML, CSS, JavaScript, Redis
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Develop and maintain HR management features, business workflows, and backend functionality.</li>
                <li>Implement database operations, custom fields, approval workflows, and role-based access controls.</li>
                <li>Optimize complex database queries and implement Redis caching to improve application performance.</li>
                <li>Troubleshoot production issues, investigate application errors, and improve system reliability.</li>
                <li>Implement queue processing, status tracking, and retry mechanisms for background operations.</li>
                <li>Resolve application errors using monitoring and logging tools, including Sentry.</li>
                <li>Develop evaluation and feedback workflows for Contributors, Recruiters, and HR Managers during interview scheduling.</li>
                <li>Automate Excel-based evaluation data creation and updates using form fields and interview feedback.</li>
                <li>Improve external evaluation workflows and feedback processing.</li>
                <li>Implement and maintain OpenAPI documentation and API functionality for UserList, MemberList, and JobList.</li>
                <li>Develop custom-field filtering, client-specific functionality, and approval permissions.</li>
                <li>Implement candidate communication functionality, including WhatsApp messaging.</li>
              </ul>
            </div>

            {/* Product: HireSide */}
            <div className="mt-4 pl-3 border-l-2 border-slate-800 print:border-slate-300">
              <div className="text-xs font-bold text-white print:text-black">
                Product: HireSide — Applicant Tracking System (ATS)
              </div>
              <div className="text-[11px] text-slate-400 print:text-slate-600 mb-1.5">
                Technologies: Next.js, React.js, JavaScript, PHP, MySQL, Redis, REST APIs, AI/LLM APIs
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Develop and maintain full-stack functionality for a recruitment and applicant tracking platform.</li>
                <li>Build recruitment interfaces and backend integrations for job management, candidate management, and employer workflows.</li>
                <li>Implement client-specific features, custom job fields, permissions, and application behavior for enterprise customers.</li>
                <li>Develop AI-powered resume parsing workflows to extract structured candidate information from uploaded resumes.</li>
                <li>Implement job-wise resume parsing attempt tracking, error logging, and email notifications for HR Managers.</li>
                <li>Improve parsing reliability by addressing bulk upload issues and refining the resume parsing experience.</li>
                <li>Integrate AI-based candidate-job matching and scoring based on skills, experience, education, location, and job-title relevance.</li>
                <li>Implement score retry functionality and improve the presentation of candidate matching results.</li>
                <li>Integrate LLM APIs for resume processing, structured data extraction, and candidate evaluation.</li>
                <li>Develop background processing and status tracking for longer-running tasks.</li>
                <li>Implement interview evaluation workflows and automate the handling of evaluation forms and feedback.</li>
                <li>Enhance database-backed recruitment workflows and API integrations.</li>
                <li>Implement client-specific URL behavior, conditional business logic, and access restrictions.</li>
              </ul>
            </div>
          </div>

          {/* Salesflo */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                Salesflo (Private) Limited — Hyderabad / Lahore, Pakistan
              </h3>
              <span className="text-xs font-medium text-cyan-400 print:text-slate-700">
                November 2021 – March 10, 2025
              </span>
            </div>
            <div className="text-xs font-semibold text-slate-300 print:text-slate-800 italic">
              React.js / Next.js Developer
            </div>

            <div className="mt-3 pl-3 border-l-2 border-slate-800 print:border-slate-300">
              <div className="text-xs font-bold text-white print:text-black">
                Product: Engage — Merchandising & Workflow Management Tool
              </div>
              <div className="text-[11px] text-slate-400 print:text-slate-600 mb-1.5">
                Technologies: Next.js, React.js, JavaScript, AWS Lambda, Amazon Athena, Amazon S3, web services
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Developed and maintained frontend features for an enterprise merchandising and workflow management platform.</li>
                <li>Built user-facing functionality using Next.js and React.js.</li>
                <li>Integrated web services and APIs to support business workflows and application data.</li>
                <li>Worked with AWS Lambda for serverless application functionality.</li>
                <li>Used Amazon Athena for data querying and analysis.</li>
                <li>Integrated Amazon S3 into cloud-based storage and application workflows.</li>
                <li>Implemented product enhancements based on business requirements.</li>
                <li>Investigated application issues and supported ongoing maintenance and improvements.</li>
                <li>Collaborated with team members to deliver reliable application functionality.</li>
              </ul>
            </div>
          </div>

          {/* Hidaya */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                Hidaya Institute of Science and Technology — Jamshoro, Sindh, Pakistan
              </h3>
              <span className="text-xs font-medium text-cyan-400 print:text-slate-700">
                May 1, 2021 – October 30, 2021
              </span>
            </div>
            <div className="text-xs font-semibold text-slate-300 print:text-slate-800 italic">
              Web Development Trainee / Intern
            </div>

            <div className="mt-2 pl-3 border-l-2 border-slate-800 print:border-slate-300">
              <div className="text-xs font-bold text-white print:text-black">
                Project: School Learning Management System
              </div>
              <div className="text-[11px] text-slate-400 print:text-slate-600 mb-1.5">
                Technologies: HTML, CSS, JavaScript, PHP, MySQL
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Developed web application features for a School Learning Management System.</li>
                <li>Created user interfaces using HTML and CSS.</li>
                <li>Implemented client-side interactions using JavaScript.</li>
                <li>Developed server-side functionality using PHP and MySQL.</li>
                <li>Worked on application functionality supporting school-related learning and management processes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-sky-800 border-b border-slate-800 print:border-slate-300 pb-1 mb-2.5">
            Selected Projects
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 print:text-slate-800">
            <div>
              <h4 className="font-bold text-white print:text-black">
                HireSide — AI-Powered Recruitment Platform
              </h4>
              <p>Developed recruitment workflows, job management features, candidate management, and employer functionality. Integrated AI-powered resume parsing and candidate-job matching. Implemented interview evaluations, feedback handling, and client-specific workflows.</p>
            </div>
            <div>
              <h4 className="font-bold text-white print:text-black">
                WebHR — Human Resource Management System
              </h4>
              <p>Enhanced HR workflows, approval permissions, evaluation processes, and automated data handling. Improved database performance through query optimization and Redis caching. Implemented API documentation and system monitoring improvements.</p>
            </div>
            <div>
              <h4 className="font-bold text-white print:text-black">
                Engage — Merchandising & Workflow Management
              </h4>
              <p>Developed application features using Next.js and React.js. Integrated AWS Lambda, Amazon Athena, Amazon S3, and web services into product workflows.</p>
            </div>
            <div>
              <h4 className="font-bold text-white print:text-black">
                AI Resume Parsing & Candidate Matching
              </h4>
              <p>Integrated LLM APIs for resume data extraction and candidate scoring. Implemented parsing attempt tracking, error logging, and retry mechanisms. Enhanced candidate-job relevance scoring using job-related criteria.</p>
            </div>
            <div>
              <h4 className="font-bold text-white print:text-black">
                School Learning Management System
              </h4>
              <p>Developed a training project using HTML, CSS, JavaScript, PHP, and MySQL.</p>
            </div>
          </div>
        </section>

        {/* Education & Certification Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-800 print:border-slate-300">
          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-sky-800 pb-1 mb-1.5">
              Education
            </h2>
            <div className="text-xs sm:text-sm">
              <strong className="text-white print:text-black">
                {EDUCATION.degree}
              </strong>
              <div className="text-slate-400 print:text-slate-700">{EDUCATION.institution}</div>
              <div className="text-slate-400 print:text-slate-700 text-xs">{EDUCATION.period}</div>
            </div>
          </div>

          {/* Certification */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-sky-800 pb-1 mb-1.5">
              Certification
            </h2>
            <div className="text-xs sm:text-sm">
              <strong className="text-white print:text-black">
                {CERTIFICATION.title}
              </strong>
              <div className="text-slate-400 print:text-slate-700">{CERTIFICATION.issuer}</div>
              <div className="text-slate-400 print:text-slate-700 text-xs">{CERTIFICATION.year}</div>
            </div>
          </div>
        </div>

        {/* Additional Experience */}
        <section className="mt-6 pt-4 border-t border-slate-800 print:border-slate-300">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-sky-800 pb-1 mb-2">
            Additional Experience & Competencies
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside text-xs text-slate-300 print:text-slate-800">
            <li>REST API integration and OpenAPI documentation</li>
            <li>Database optimization and Redis caching</li>
            <li>AI/LLM API integration and structured data extraction</li>
            <li>Queue processing, retries, and error logging</li>
            <li>Role-based permissions and approval workflows</li>
            <li>Enterprise client customization</li>
            <li>DNS and domain configuration</li>
            <li>Production troubleshooting and application maintenance</li>
          </ul>
        </section>
      </main>
    </div>
  );
}


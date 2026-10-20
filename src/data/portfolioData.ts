export interface Project {
  id: string;
  title: string;
  subtitle: string;
  clientOrCompany: string;
  category: "AI & ATS" | "Enterprise HRMS" | "Cloud & Merchandising" | "EdTech";
  featured: boolean;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  role: string;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  status?: string;
  summary: string;
  products: {
    name: string;
    description: string;
    technologies: string[];
    achievements: string[];
  }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: string; badge?: string }[];
}

export const PERSONAL_INFO = {
  name: "Abdul Aziz Dal",
  title: "Senior Full Stack Developer",
  specialization: "Next.js • React.js • PHP • AWS • AI Integration",
  tagline: "Architecting high-scale enterprise platforms, ATS systems with LLM intelligence, and cloud-native workflows.",
  phone: "03030310582",
  phoneFormatted: "+92 303 0310582",
  email: "dalaziz930786@gmail.com",
  location: "Karachi, Sindh, Pakistan",
  linkedin: "https://www.linkedin.com/in/abdul-aziz-053610226/",
  github: "https://github.com/abdulazizdal",
  whatsapp: "https://wa.me/923030310582",
  availableForHire: true,
  yearsOfExperience: "5+",
  bio: `Senior Full Stack Developer with extensive production experience in building and maintaining enterprise web applications, workflow management platforms, Human Resource Management Systems (HRMS), and Applicant Tracking Systems (ATS). Skilled across Next.js, React.js, PHP, JavaScript, MySQL, Redis, and AWS cloud infrastructure.

Renowned for architecting AI-powered recruitment workflows (resume parsing, structured data extraction, candidate-job matching algorithms), fine-tuning database queries, establishing resilient background queue workers, and delivering reliable production systems.`,
};

export const KEY_METRICS = [
  { value: "5+", label: "Years Experience", description: "Production full-stack & cloud engineering" },
  { value: "3", label: "Enterprise Flagships", description: "HireSide ATS, WebHR HRMS, Salesflo Engage" },
  { value: "AWS", label: "Certified Developer", description: "AWS Certified Developer – Associate (2023)" },
  { value: "98%", label: "Resume Parsing Reliability", description: "AI/LLM structured data extraction workflows" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "verge",
    company: "Verge (Private) Limited",
    location: "Hyderabad, Pakistan",
    role: "Senior Software Developer",
    period: "May 2025 – Present",
    status: "Current",
    summary:
      "Leading full-stack engineering across two core enterprise flagships: HireSide (AI-Driven ATS) and WebHR (Global HRMS). Driving architecture, AI integrations, performance tuning, and background processing systems.",
    products: [
      {
        name: "HireSide — Applicant Tracking System (ATS)",
        description:
          "Full-lifecycle recruitment platform powering enterprise hiring teams with AI resume parsing, candidate scoring, and automated candidate evaluations.",
        technologies: ["Next.js", "React.js", "PHP", "MySQL", "Redis", "REST APIs", "AI / LLM APIs"],
        achievements: [
          "Engineered AI-powered resume parsing workflows utilizing LLM APIs to extract structured candidate details (skills, experience, education, timeline) with high fidelity.",
          "Designed and shipped AI-based candidate-job relevance matching & scoring engine based on multi-dimensional vectors (skills overlap, seniority, domain, education, location).",
          "Built job-wise parsing attempt tracking, error logging, retry queues, and automated email notifications for HR leadership.",
          "Overcame bulk upload scaling bottlenecks by refactoring ingestion queues, dramatically boosting parsing throughput and UI responsiveness.",
          "Implemented client-specific URL routing, multi-tenant permission controls, and custom candidate evaluation workflows.",
          "Developed background worker queues with status tracking for long-running batch extraction jobs.",
        ],
      },
      {
        name: "WebHR — Human Resource Management System (HRMS)",
        description:
          "Enterprise HR automation platform utilized by global organizations for workforce operations, performance evaluations, and employee management.",
        technologies: ["PHP", "MySQL", "JavaScript", "Redis", "HTML/CSS", "OpenAPI", "Sentry"],
        achievements: [
          "Developed core HR business workflows, role-based access control (RBAC), and dynamic custom-field approval engines.",
          "Optimized high-volume database queries and introduced Redis caching layers, achieving significant response time reductions.",
          "Integrated Sentry APM and centralized error logging to identify and resolve critical production exceptions proactively.",
          "Constructed background queue workers with status tracking and exponential retry logic for mission-critical operations.",
          "Automated Excel-based interview evaluation reporting, aggregating live feedback from Recruiters, Contributors, and HR Managers.",
          "Authored and maintained comprehensive OpenAPI (Swagger) specifications and endpoints for UserList, MemberList, and JobList.",
          "Implemented candidate engagement channels including WhatsApp Business messaging workflows.",
        ],
      },
    ],
  },
  {
    id: "salesflo",
    company: "Salesflo (Private) Limited",
    location: "Hyderabad / Lahore, Pakistan",
    role: "React.js / Next.js Developer",
    period: "November 2021 – March 10, 2025",
    summary:
      "Spearheaded frontend application architecture and cloud-connected workflows for enterprise FMCG merchandising and field-force operational tools.",
    products: [
      {
        name: "Engage — Merchandising & Workflow Management Tool",
        description:
          "Enterprise-scale merchandising platform enabling FMCG leaders to audit, track, and manage retail execution in real time.",
        technologies: ["Next.js", "React.js", "JavaScript", "AWS Lambda", "Amazon Athena", "Amazon S3", "Web Services"],
        achievements: [
          "Architected modern, performant user interfaces using Next.js and React.js for enterprise field workforce tracking.",
          "Integrated AWS Lambda serverless functions to run scalable compute jobs for event-driven backend tasks.",
          "Utilized Amazon Athena to query and analyze millions of merchandising data records stored in Amazon S3 data lakes.",
          "Implemented robust state management, modular component architecture, and responsive designs for high-frequency operations.",
          "Diagnosed and resolved complex frontend bottlenecks, enhancing app load times and cross-browser stability.",
        ],
      },
    ],
  },
  {
    id: "hidaya",
    company: "Hidaya Institute of Science and Technology",
    location: "Jamshoro, Sindh, Pakistan",
    role: "Web Development Trainee / Intern",
    period: "May 1, 2021 – October 30, 2021",
    summary:
      "Intensive software engineering training focused on core full-stack web development principles, relational database design, and web architecture.",
    products: [
      {
        name: "School Learning Management System (LMS)",
        description:
          "End-to-end educational portal for managing student enrollments, grading, curriculum tracks, and administrative records.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        achievements: [
          "Developed server-side business logic and authentication in PHP backed by a normalized MySQL schema.",
          "Crafted responsive user portals for teachers, students, and school administrators.",
          "Gained foundational mastery of full-stack engineering, SQL optimization, and clean code paradigms.",
        ],
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "hireside-ats",
    title: "HireSide — AI-Powered Applicant Tracking System",
    subtitle: "Enterprise Recruitment & Automated Candidate Sourcing",
    clientOrCompany: "Verge (Private) Limited",
    category: "AI & ATS",
    featured: true,
    period: "2025 – Present",
    role: "Senior Full Stack & AI Lead Developer",
    description:
      "Next-generation applicant tracking system built to automate recruitment workflows using cutting-edge LLM models for resume parsing, candidate scoring, and interview pipelines.",
    highlights: [
      "AI resume parsing pipeline extracting skills, history, and credentials into structured JSON in seconds",
      "Multi-criteria candidate-to-job matching algorithm with weighted relevance scoring",
      "Resilient background queues for bulk CV ingestion with error monitoring and retry mechanisms",
      "Enterprise custom fields, client-specific portal branding, and role-based permissions",
      "Interactive evaluation workflows aggregating hiring manager and interviewer scorecards",
    ],
    techStack: ["Next.js", "React.js", "PHP", "MySQL", "Redis", "OpenAI/Claude API", "REST APIs"],
    metrics: [
      { label: "Parsing Accuracy", value: "98%" },
      { label: "Screening Time", value: "-70%" },
      { label: "Batch Uploads", value: "Parallel Queued" },
    ],
  },
  {
    id: "webhr-hrms",
    title: "WebHR — Global Cloud HR Management System",
    subtitle: "Enterprise Workforce Automation & Core HR Architecture",
    clientOrCompany: "Verge (Private) Limited",
    category: "Enterprise HRMS",
    featured: true,
    period: "2025 – Present",
    role: "Senior Software Developer",
    description:
      "Comprehensive cloud HR platform facilitating global personnel management, customized approvals, automated evaluations, and multi-tier organizational permissions.",
    highlights: [
      "Refactored mission-critical SQL queries and established Redis caching layer, drastically reducing page latency",
      "Automated dynamic Excel evaluation report generation from interview feedback forms",
      "Designed OpenAPI specifications and built REST endpoints for UserList, MemberList, and JobList",
      "Built candidate communications bridge integrating WhatsApp Business messaging",
      "Proactive error resolution and system monitoring using Sentry APM",
    ],
    techStack: ["PHP", "MySQL", "Redis", "JavaScript", "OpenAPI / Swagger", "Sentry", "WhatsApp API"],
    metrics: [
      { label: "Query Speedup", value: "3.5x Faster" },
      { label: "Cache Hit Rate", value: "85%+" },
      { label: "API Compliance", value: "OpenAPI 3.0" },
    ],
  },
  {
    id: "salesflo-engage",
    title: "Salesflo Engage — Enterprise Merchandising Platform",
    subtitle: "Cloud-Native Retail Execution & Workflow Engine",
    clientOrCompany: "Salesflo (Private) Limited",
    category: "Cloud & Merchandising",
    featured: true,
    period: "2021 – 2025",
    role: "React.js / Next.js Developer",
    description:
      "Cloud-based operational tool used by leading FMCG brands to orchestrate in-store merchandising, audits, real-time analytics, and field workforce distribution.",
    highlights: [
      "Built responsive, data-dense Next.js/React.js dashboards for field management operations",
      "Engineered serverless execution pipelines using AWS Lambda for high-concurrency event processing",
      "Queried multi-gigabyte historical trade datasets using Amazon Athena directly from Amazon S3",
      "Designed flexible workflow editors allowing clients to customize field audit questionnaires",
    ],
    techStack: ["Next.js", "React.js", "AWS Lambda", "Amazon Athena", "Amazon S3", "JavaScript"],
    metrics: [
      { label: "Records Audited", value: "10M+" },
      { label: "Data Queries", value: "Athena / S3" },
      { label: "Architecture", value: "Serverless" },
    ],
  },
  {
    id: "ai-parser-engine",
    title: "AI Resume Parsing & Job-Relevance Engine",
    subtitle: "Proprietary Candidate Evaluation Architecture",
    clientOrCompany: "Verge / HireSide",
    category: "AI & ATS",
    featured: false,
    period: "2025",
    role: "Architecture & Integration",
    description:
      "A specialized pipeline combining LLM prompt-engineering, schema enforcement, and mathematical relevance scoring to rank candidate CVs against complex job descriptions.",
    highlights: [
      "Deterministic structured JSON output extraction from unstructured PDF/DOCX resumes",
      "Configurable weighting for skills, experience longevity, education level, and job title alignment",
      "Auto-retry engine with error logging and notification dispatch for corrupted uploads",
      "Interactive candidate comparison view for HR decision-makers",
    ],
    techStack: ["LLM APIs", "Next.js", "PHP", "Redis", "MySQL", "Regex / Heuristics"],
    metrics: [
      { label: "Extraction Schema", value: "Strict JSON" },
      { label: "Matching Dimensions", value: "5-Tier Vector" },
    ],
  },
  {
    id: "school-lms",
    title: "School Learning Management System (LMS)",
    subtitle: "Academic Management & Student Records Portal",
    clientOrCompany: "Hidaya Institute",
    category: "EdTech",
    featured: false,
    period: "2021",
    role: "Web Development Intern",
    description:
      "Comprehensive school portal facilitating course materials, student registration, grading sheets, and administrator oversight.",
    highlights: [
      "Custom relational database schema modeling students, courses, terms, and grades",
      "Interactive student registration and grade calculation engine",
      "Role-based dashboards for faculty and administrative staff",
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    description: "Building fast, accessible, and scalable enterprise web interfaces.",
    skills: [
      { name: "Next.js (App Router & SSR)", level: "Senior / Expert", badge: "Primary" },
      { name: "React.js & Hooks Architecture", level: "Senior / Expert", badge: "Primary" },
      { name: "JavaScript (ES6+) & TypeScript", level: "Senior / Expert" },
      { name: "Tailwind CSS & Modern CSS3", level: "Advanced" },
      { name: "Material UI (MUI) & Bootstrap", level: "Advanced" },
      { name: "Responsive UI & Cross-Browser", level: "Expert" },
      { name: "Component State & Performance", level: "Advanced" },
    ],
  },
  {
    title: "Backend & System Design",
    iconName: "Server",
    description: "High-throughput APIs, enterprise business logic, and queues.",
    skills: [
      { name: "PHP (Modern & Enterprise)", level: "Senior / Expert", badge: "Primary" },
      { name: "RESTful API Design & OpenAPI", level: "Senior / Expert", badge: "Primary" },
      { name: "Background Queue Processing", level: "Advanced", badge: "Specialty" },
      { name: "Microservices & Web Services", level: "Advanced" },
      { name: "Role-Based Access Control (RBAC)", level: "Expert" },
      { name: "Error Logging & Sentry APM", level: "Advanced" },
      { name: "Production Troubleshooting", level: "Expert" },
    ],
  },
  {
    title: "Databases & Caching",
    iconName: "Database",
    description: "Relational modeling, distributed caching, and query optimization.",
    skills: [
      { name: "MySQL (Schema, Indexing, Joins)", level: "Senior / Expert", badge: "Primary" },
      { name: "Redis (Caching, Sessions, Queues)", level: "Senior / Expert", badge: "Primary" },
      { name: "Complex Query Optimization", level: "Advanced", badge: "High Impact" },
      { name: "Data Normalization & Migrations", level: "Advanced" },
      { name: "Transaction Safety & Integrity", level: "Advanced" },
    ],
  },
  {
    title: "AWS Cloud & Infrastructure",
    iconName: "Cloud",
    description: "Certified cloud developer designing serverless & scalable systems.",
    skills: [
      { name: "AWS Certified Developer – Associate", level: "Certified", badge: "Official" },
      { name: "AWS Lambda (Serverless)", level: "Advanced" },
      { name: "Amazon S3 (Cloud Storage)", level: "Advanced" },
      { name: "Amazon Athena (SQL Big Data)", level: "Advanced" },
      { name: "Amazon RDS & EC2", level: "Proficient" },
      { name: "Amazon Route 53 & DNS Mgmt", level: "Advanced" },
      { name: "Domain & SSL Provisioning", level: "Proficient" },
    ],
  },
  {
    title: "AI Integration & Automation",
    iconName: "BrainCircuit",
    description: "Harnessing LLM capabilities for practical production automation.",
    skills: [
      { name: "LLM API Integration (OpenAI, etc.)", level: "Advanced", badge: "Hot" },
      { name: "AI Resume Parsing Workflows", level: "Expert", badge: "Featured" },
      { name: "Candidate-Job Scoring Algorithms", level: "Expert", badge: "Featured" },
      { name: "Structured JSON Extraction", level: "Advanced" },
      { name: "Automated Evaluation Systems", level: "Advanced" },
      { name: "WhatsApp Business Automation", level: "Proficient" },
    ],
  },
  {
    title: "DevOps & Engineering Tools",
    iconName: "Wrench",
    description: "Tools ensuring high software quality, testing, and continuous delivery.",
    skills: [
      { name: "Git & GitHub Collaboration", level: "Expert" },
      { name: "OpenAPI / Swagger Documentation", level: "Advanced" },
      { name: "Sentry Monitoring & Alerting", level: "Advanced" },
      { name: "Postman / API Test Suites", level: "Advanced" },
      { name: "Linux CLI & Server Management", level: "Proficient" },
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Science (BSCS)",
  institution: "University of Sindh",
  period: "2017 – 2020",
  description:
    "Comprehensive studies in Data Structures, Algorithms, Database Management Systems, Software Engineering, Object-Oriented Programming, and Operating Systems.",
};

export const CERTIFICATION = {
  title: "AWS Certified Developer – Associate",
  issuer: "Amazon Web Services (AWS)",
  year: "2023",
  badgeUrl: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
  description:
    "Validates technical expertise in developing, deploying, and debugging cloud-based applications using AWS services including Lambda, S3, RDS, DynamoDB, API Gateway, and CloudFormation.",
};


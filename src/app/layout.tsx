import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abdulazizdal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdul Aziz Dal | Senior Full Stack Developer & AI Integration",
    template: "%s | Abdul Aziz Dal",
  },
  description:
    "Official portfolio of Abdul Aziz Dal (Abdul Aziz) — Senior Full Stack Developer specializing in Next.js, React.js, PHP, MySQL, Redis, AWS, and AI/LLM integration. 5+ years experience building enterprise HRMS (WebHR) and ATS (HireSide) platforms in Karachi, Pakistan.",
  keywords: [
    "Abdul Aziz",
    "Abdul Aziz Dal",
    "Abdul Aziz Developer",
    "Abdul Aziz Full Stack Developer",
    "Abdul Aziz Software Engineer",
    "Abdul Aziz Next.js",
    "Abdul Aziz React",
    "Abdul Aziz PHP",
    "Abdul Aziz AWS",
    "Abdul Aziz Karachi",
    "Abdul Aziz Pakistan",
    "Abdul Aziz HireSide",
    "Abdul Aziz WebHR",
    "Senior Full Stack Developer Karachi",
    "AI Integration Engineer Pakistan",
    "AWS Certified Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Abdul Aziz Dal", url: siteUrl }],
  creator: "Abdul Aziz Dal",
  publisher: "Abdul Aziz Dal",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Abdul Aziz Dal | Senior Full Stack Developer & AI Integration",
    description:
      "Official portfolio of Abdul Aziz Dal — Senior Full Stack Developer specializing in Next.js, React.js, PHP, MySQL, Redis, AWS, and AI/LLM integration. 5+ years experience building enterprise platforms.",
    url: siteUrl,
    siteName: "Abdul Aziz Dal Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: `${siteUrl}/abdul-aziz-dal.jpg`,
        width: 1000,
        height: 1200,
        alt: "Abdul Aziz Dal — Senior Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Aziz Dal | Senior Full Stack Developer & AI Integration",
    description:
      "Senior Full Stack Developer specializing in Next.js, React.js, PHP, MySQL, Redis, AWS & AI Integration.",
    images: [`${siteUrl}/abdul-aziz-dal.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Abdul Aziz Dal",
        image: `${siteUrl}/abdul-aziz-dal.jpg`,
        alternateName: [
          "Abdul Aziz",
          "Aziz Dal",
          "Abdul Aziz Developer",
          "Abdul Aziz Software Engineer",
        ],
        jobTitle: "Senior Full Stack Developer",
        description:
          "Senior Full Stack Developer & AI Solutions Engineer specializing in Next.js, React.js, PHP, MySQL, Redis, AWS, and AI integration. Proven track record scaling HireSide ATS and WebHR HRMS.",
        url: siteUrl,
        email: "mailto:dalaziz930786@gmail.com",
        telephone: "+923030310582",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karachi",
          addressRegion: "Sindh",
          addressCountry: "PK",
        },
        sameAs: [
          "https://www.linkedin.com/in/abdul-aziz-053610226/",
          "https://github.com/abdulazizdal",
        ],
        worksFor: [
          {
            "@type": "Organization",
            name: "Verge (Private) Limited",
          },
          {
            "@type": "Organization",
            name: "HireSide",
          },
          {
            "@type": "Organization",
            name: "WebHR",
          },
          {
            "@type": "Organization",
            name: "Salesflo (Private) Limited",
          },
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Sindh",
        },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "AWS Certified Developer – Associate",
            recognizedBy: {
              "@type": "Organization",
              name: "Amazon Web Services (AWS)",
            },
          },
        ],
        knowsAbout: [
          "Next.js",
          "React.js",
          "PHP",
          "MySQL",
          "Redis",
          "AWS Cloud",
          "AWS Lambda",
          "Amazon Athena",
          "Amazon S3",
          "Amazon RDS",
          "LLM APIs",
          "AI Resume Parsing",
          "Candidate-Job Matching Algorithms",
          "Applicant Tracking Systems (ATS)",
          "Human Resource Management Systems (HRMS)",
          "REST APIs",
          "OpenAPI",
          "Sentry APM",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Abdul Aziz Dal — Official Portfolio",
        description:
          "Official portfolio and resume of Abdul Aziz Dal, Senior Full Stack Developer & AI Integration Engineer.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: "Abdul Aziz Dal Portfolio & Resume",
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import ResumeView from "@/components/ResumeView";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abdulazizdal.dev";

export const metadata: Metadata = {
  title: "Abdul Aziz Dal — Resume & CV | Senior Full Stack Developer",
  description:
    "Official resume of Abdul Aziz Dal (Abdul Aziz) — Senior Full Stack Developer specializing in Next.js, React.js, PHP, MySQL, Redis, AWS & AI Integration. Print or export ATS-friendly PDF.",
  keywords: [
    "Abdul Aziz Dal Resume",
    "Abdul Aziz CV",
    "Abdul Aziz Developer Resume",
    "Abdul Aziz Full Stack CV",
    "Abdul Aziz Dal HireSide",
    "Abdul Aziz Dal WebHR",
    "Abdul Aziz Karachi Developer",
  ],
  alternates: {
    canonical: `${siteUrl}/resume`,
  },
  openGraph: {
    title: "Abdul Aziz Dal — Resume & CV | Senior Full Stack Developer",
    description:
      "Official resume of Abdul Aziz Dal — Senior Full Stack Developer specializing in Next.js, React.js, PHP, MySQL, Redis, AWS & AI Integration.",
    url: `${siteUrl}/resume`,
    type: "profile",
  },
};

export default function ResumePage() {
  return <ResumeView />;
}

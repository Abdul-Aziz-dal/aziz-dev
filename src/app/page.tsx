import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AiDemoSimulator from "@/components/AiDemoSimulator";
import SkillsSection from "@/components/SkillsSection";
import EducationCertifications from "@/components/EducationCertifications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090e]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AiDemoSimulator />
        <SkillsSection />
        <EducationCertifications />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

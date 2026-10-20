import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AiDemoSimulator from "@/components/AiDemoSimulator";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationCertifications from "@/components/EducationCertifications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AiDemoSimulator />
        <ArchitectureDiagram />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationCertifications />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";
import { AboutSection } from "@/components/about-section";
import { MetricsSection } from "@/components/metrics-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProjectsSection />
        <ResumeSection />
        <AboutSection />
        <MetricsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

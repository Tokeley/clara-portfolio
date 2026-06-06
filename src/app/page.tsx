import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CVSection } from "@/components/CVSection";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CVSection />
      <ProjectGrid />
    </>
  );
}

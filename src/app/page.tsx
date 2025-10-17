import PageLayout from "@/components/layouts/page-layout";
import LinksContainer from "@/components/nav-bar/link-container";
import NavBar from "@/components/nav-bar/nav-bar";
import AboutSection from "@/components/sections/about-section";
import BlogSection from "@/components/sections/blog-section";
import ContactSection from "@/components/sections/contact-section";
import CoreAbilitySection from "@/components/sections/core-ability-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import ScrollUpButton from "@/components/ui/scroll-up-button";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <CoreAbilitySection />
      {/* Interview Section */}
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection />
      <ContactSection />
      {/* link */}
      <div className="fixed bottom-0 left-6 md:translate-x-4 transition ">
        <div className="flex flex-col items-center justify-center gap-6">
          <LinksContainer />
          <div className="w-px h-30 bg-gray-400"></div>
        </div>
      </div>
      {/* up */}
      <div className="fixed bottom-10 z-50 right-10 lg:-translate-x-4 transition ">
        <ScrollUpButton />
      </div>
      {/* nav */}
      <div className="fixed top-0 right-3 md:-translate-x-4 transition ">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-px h-20 bg-gray-400"></div>
          <NavBar />
        </div>
      </div>
    </PageLayout>
  );
}

import SectionLayout from "@/components/layouts/section-layout";
import AboutContent from "./about/content";
import AboutProfileImage from "./about/profile-image";
import AboutTimeline from "./about/time-line";

export default function AboutSection() {
  return (
    <SectionLayout id="about" title="About Me">
      <div className="flex flex-col gap-30">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <AboutContent />
          <AboutProfileImage />
        </div>
        <AboutTimeline />
      </div>
    </SectionLayout>
  );
}

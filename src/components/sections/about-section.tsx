import SectionLayout from "@/components/layouts/section-layout";
import AboutContent from "./about/content";
import AboutProfileImage from "./about/profile-image";

export default function AboutSection() {
  return (
    <SectionLayout id="about" title="About Me">
      <div className="flex flex-col gap-30">
        <div className="flex items-start justify-center">
          <AboutContent />
          <AboutProfileImage />
        </div>
      </div>
    </SectionLayout>
  );
}

import { ExperienceData } from "@/data/exerience";
import SectionLayout from "../layouts/section-layout";
import ExperienceContainer from "./experience/experience-container";

export default function ExperienceSection() {
  const education = ExperienceData.filter(
    (experience) => experience.type === "Education"
  );
  const awardsCertificates = ExperienceData.filter(
    (experience) =>
      experience.type === "Award" || experience.type === "Certificates"
  );
  const etc = ExperienceData.filter((experience) => experience.type === "etc");

  return (
    <SectionLayout id="experience" title="Experience">
      <div className="flex flex-col gap-30 w-full">
        <ExperienceContainer title="Education" experiences={education} />
        <ExperienceContainer
          title="Awards & Certificates"
          experiences={awardsCertificates}
        />
        <ExperienceContainer title="Etc" experiences={etc} />
      </div>
    </SectionLayout>
  );
}

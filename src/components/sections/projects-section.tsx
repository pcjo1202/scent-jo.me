import SectionLayout from "@/components/layouts/section-layout";
import ProjectContents from "./project/project-contents";

export default function ProjectsSection() {
  return (
    <SectionLayout id="projects" title="Projects">
      <ProjectContents />
    </SectionLayout>
  );
}

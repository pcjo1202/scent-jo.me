import { Project } from "@/types/project.type";

interface ProjectListContentProps {
  project: Project;
}

export default function ProjectListContent({
  project,
}: ProjectListContentProps) {
  const { type, title, description, skills } = project;
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center gap-2 justify-between">
        {/* left */}
        <div className="text-sm text-blue-400 mb-4">{type}</div>
        {/* right */}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h3>
      <p className="text-sm flex-1 text-gray-500">{description}</p>
      <div className="text-sm text-gray-500">{skills.join(", ")}</div>
    </div>
  );
}

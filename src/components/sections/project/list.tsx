import { Project } from "@/types/project.type";
import ProjectListContent from "./list-content";
import { cn } from "@/lib/utils";

export default function ProjectList({ Projects }: { Projects: Project[] }) {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {Projects.map((project) => (
        <li
          key={project.id}
          className="hover:-translate-y-2 transition-all hover:shadow-md duration-300 border cursor-pointer px-6 py-8 rounded-lg w-full h-90 max-h-80 lg:max-h-90"
        >
          <div
            className={cn(
              "flex h-full relative",
              project.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div className="absolute left-0 top-0 w-full lg:static flex-1 h-full z-10">
              <ProjectListContent project={project} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

import { Experience } from "@/types/experience.type";
import ExperienceItem from "./item";

interface ExperienceContainerProps {
  title: string;
  experiences: Experience[];
}

export default function ExperienceContainer({
  title,
  experiences,
}: ExperienceContainerProps) {
  return (
    <div className="flex flex-col gap-8 w-full items-center justify-center">
      <h3 className="text-xl text-blue-400 font-bold">{title}</h3>
      <ul className="flex flex-col gap-8 lg:w-3/4 w-full">
        {experiences.map((experience) => (
          <li key={experience.id}>
            <ExperienceItem experience={experience} />
          </li>
        ))}
      </ul>
    </div>
  );
}

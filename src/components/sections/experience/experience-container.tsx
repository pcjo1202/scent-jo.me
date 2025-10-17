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
      <h3 className="text-2xl text-blue-400 font-bold">{title}</h3>
      <ul className="flex flex-col gap-6 w-full max-w-5xl">
        {experiences.map((experience) => (
          <li key={experience.id} className="w-full">
            <ExperienceItem experience={experience} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Experience } from "@/types/experience.type";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { title, institution, description, date } = experience;

  return (
    <div className="flex gap-4">
      {/* date */}
      <div className="basis-4/12">
        {date.end && (
          <p className="text-base text-gray-500">
            {date.start} - {date.end}
          </p>
        )}
        {!date.end && <p className="text-sm text-gray-500">{date.start}</p>}
      </div>
      {/* content */}
      <div className="basis-8/12 flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          {/* title */}
          <h3 className="text-lg font-bold">{title}</h3>
          {/* institution */}
          <span className="text-sm text-gray-500">{institution}</span>
        </div>
        {/* description */}
        <ol className="text-base list-disc list-inside text-gray-500">
          {description?.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

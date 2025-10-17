import SpotlightCard from "@/components/ui/SpotlightCard";
import { Experience } from "@/types/experience.type";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { title, institution, description, date } = experience;

  // 날짜 포맷팅
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split("-");
    if (month) {
      return `${year}.${month}`;
    }
    return year;
  };

  const hasDescription =
    description && description.length > 0 && description[0] !== "";

  return (
    <SpotlightCard className="group hover:scale-[1.005] transition-all duration-300 w-full">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
        {/* 날짜 영역 */}
        <div className="flex-shrink-0 sm:w-32 lg:w-40">
          <div className="flex sm:flex-col gap-2 sm:gap-1 items-center sm:items-start sm:border-l-2 sm:border-blue-500/30 sm:pl-4">
            <time className="text-sm font-semibold text-neutral-200 whitespace-nowrap">
              {formatDate(date.start)}
            </time>
            {date.end ? (
              <>
                <span className="text-xs text-neutral-500 sm:my-0.5">→</span>
                <time className="text-sm font-semibold text-neutral-200 whitespace-nowrap">
                  {formatDate(date.end)}
                </time>
              </>
            ) : (
              <>
                <span className="text-xs text-neutral-500 sm:my-0.5">→</span>
                <span className="text-sm font-bold text-blue-400">현재</span>
              </>
            )}
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1 flex flex-col gap-2.5 min-w-0">
          {/* 제목과 기관 */}
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight">
              {title}
            </h3>
            {institution && (
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                <p className="text-sm font-medium text-neutral-400">
                  {institution}
                </p>
              </div>
            )}
          </div>

          {/* 설명 */}
          {hasDescription && (
            <ul className="flex flex-col gap-1.5 mt-1">
              {description?.map((desc, index) => (
                <li
                  key={index}
                  className="text-sm text-neutral-400 leading-relaxed pl-4 relative before:content-['▸'] before:text-blue-500 before:font-bold before:absolute before:left-0 before:top-0"
                >
                  {desc}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}

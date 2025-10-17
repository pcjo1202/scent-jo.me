"use client";

import { Badge } from "@/components/ui/badge";
import { Skill } from "@/data/skills";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkillsListProps {
  data: Skill[];
  focusedSkills?: string[];
}
export default function SkillsList({ data, focusedSkills }: SkillsListProps) {
  const sortedSkills: Skill[] = data.sort((a, b) => {
    return focusedSkills?.includes(a.name) ? -1 : 1;
  });

  return (
    <motion.div
      className="flex flex-wrap gap-x-2 gap-y-4"
      layout // 컨테이너 자체도 layout 적용
    >
      {sortedSkills.map((skill) => (
        <SkillItem
          key={skill.name}
          skill={skill}
          focusedSkills={focusedSkills || []}
        />
      ))}
    </motion.div>
  );
}

function SkillItem({
  skill,
  focusedSkills,
}: {
  skill: Skill;
  focusedSkills: string[];
}) {
  return (
    <motion.div
      layoutId={skill.name}
      layout // 🔥 핵심: 위치가 변경될 때 자동으로 애니메이션
      transition={{
        type: "spring", // 스프링 애니메이션
        stiffness: 400, // 강성 (높을수록 빠름)
        damping: 30, // 감쇠 (높을수록 덜 튀김)
        mass: 0.8, // 질량 (낮을수록 가벼움)
      }}
    >
      <Badge
        variant="outline"
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
          focusedSkills?.includes(skill.name)
            ? "blur-0 shadow-md bg-white"
            : "blur-[1px] bg-gray-200/40"
        )}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          width={36}
          height={36}
          className="size-6 object-contain"
        />
        {skill.name}
      </Badge>
    </motion.div>
  );
}

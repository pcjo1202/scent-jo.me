import { skill_name } from "@/data/skills";

export type ProjectType = "Personal" | "Team" | "etc";
export type ProjectStatus = "Completed" | "Ongoing" | "Planning";
export type ProjectRole = "Frontend" | "Backend" | "DevOps" | "Planner" | "etc";

export interface Project {
  type: ProjectType;
  id: number;
  name: string;
  status: ProjectStatus;
  title: string;
  date: {
    start: string;
    end: string;
  };
  description: string;
  image: string;
  // 개발 인원
  members?: Partial<Record<ProjectRole, number>>;
  // 담당역할, 기여도
  roles: Partial<Record<ProjectRole, number>>;
  links: {
    github?: string;
    presentation?: string;
    figma?: string;
  };
  skills: skill_name[];
  tags?: string[];
}

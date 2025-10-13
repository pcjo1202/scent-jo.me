export type ExperienceType =
  | "Education"
  | "Work"
  | "etc"
  | "Award"
  | "Certificates";

export interface Experience {
  id: number;
  type: ExperienceType;
  title: string;
  institution?: string;
  date: {
    start: string;
    end?: string;
  };
  image: string;
  icon?: string;
  description?: string[];
}

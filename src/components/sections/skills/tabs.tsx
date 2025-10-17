import Tabs from "@/components/ui/tabs";
import { Job } from "@/data/skills";

interface SkillsTabsProps {
  activeJob: Job | "All";
  setActiveJob: (job: Job) => void;
}

export default function SkillsTabs({
  activeJob,
  setActiveJob,
}: SkillsTabsProps) {
  const jobs: Job[] = [
    "All",
    "AI",
    "Frontend",
    "Backend",
    "DevOps",
    "Mobile",
    "etc",
  ];

  return (
    <Tabs
      types={jobs}
      activeTab={activeJob}
      onTabChange={(job) => setActiveJob(job as Job)}
    />
  );
}

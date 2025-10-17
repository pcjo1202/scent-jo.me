import Tabs from "@/components/ui/tabs";
import { ProjectType } from "@/types/project.type";

interface ProjectTabsProps {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

export default function ProjectTabs({
  onTabChange,
  activeTab,
}: ProjectTabsProps) {
  const types: (ProjectType | "All")[] = ["All", "Personal", "Team", "etc"];
  return (
    <Tabs
      defaultValues="All"
      types={types}
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  );
}

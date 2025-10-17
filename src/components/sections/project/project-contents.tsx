"use client";

import { Projects } from "@/data/projects";
import { useState } from "react";
import ProjectList from "./list";
import ProjectTabs from "./tabs";

export default function ProjectContents() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredProjects = Projects.filter(
    (project) => project.type === activeTab || activeTab === "All"
  );

  return (
    <>
      <ProjectTabs onTabChange={handleSetActiveTab} activeTab={activeTab} />
      <ProjectList Projects={filteredProjects} />
    </>
  );
}

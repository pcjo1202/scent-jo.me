"use client";

import Skills, { Job } from "@/data/skills";
import { useState } from "react";
import SkillsList from "./list";
import SkillsTabs from "./tabs";

interface SkillsContentsProps {}

export default function SkillsContents({}: SkillsContentsProps) {
  const [activeJob, setActiveJob] = useState<Job>("All");

  const AllSkills = Skills;

  // TODO: 전체 스킬 필터링, 선택된 Job의 스칼만 보여주기
  const focusedSkills: string[] = Skills.filter(({ job }) => {
    return job === activeJob || activeJob === "All";
  }).map(({ name }) => name);

  return (
    <>
      {/* Tabs */}
      <SkillsTabs activeJob={activeJob} setActiveJob={setActiveJob} />
      {/* List */}
      <SkillsList data={AllSkills} focusedSkills={focusedSkills} />
    </>
  );
}

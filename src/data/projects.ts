import { Project } from "@/types/project.type";

export const Projects: Project[] = [
  {
    type: "Team",
    id: 1,
    title: "요이땅(Yoi2ttang)",
    name: "Yoi2ttang",
    status: "Completed",
    date: {
      start: "2025-04-14",
      end: "2025-05-22",
    },
    description:
      "지도 위를 달리며 땅을 차지하고, 12간지 팀과 함께 랭킹 경쟁을 펼치는 러닝 서비스",
    image: "",
    members: {
      Frontend: 3,
      Backend: 2,
      DevOps: 1,
    },
    roles: {
      Frontend: 33,
    },
    links: {
      github: "https://link.scent-jo.me/yoi2ttang/github",
      presentation: "https://link.scent-jo.me/yoi2ttang/presentation",
      figma: "https://link.scent-jo.me/yoi2ttang/figma",
    },
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "React Native (Expo)",
    ],
  },
  {
    type: "Team",
    id: 2,
    name: "IEUM",
    title: "이음(IEUM)",
    status: "Completed",
    date: {
      start: "2025-02-24",
      end: "2025-04-11",
    },
    description: "2030 세대의 외로움 해소를 돕는 위치 기반 AI 감정 소통 플랫폼",
    image: "",
    members: {
      Frontend: 3,
      Backend: 3,
    },
    roles: {
      Frontend: 40,
    },
    links: {
      github: "https://link.scent-jo.me/IEUM/github",
      presentation: "https://link.scent-jo.me/IEUM/presentation",
      figma: "https://link.scent-jo.me/IEUM/figma",
    },
    skills: [
      "Vite",
      "pnpm",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Google Analytics",
    ],
  },
  {
    type: "Team",
    id: 3,
    title: "SSACLE",
    name: "SSACLE",
    status: "Completed",
    date: {
      start: "2025-01-13",
      end: "2025-02-21",
    },
    description: "SSAFY 교육생들의 개발 스터디를 도와주는 학습 플랫폼",
    image: "",
    members: {
      Frontend: 4,
      Backend: 2,
    },
    roles: {
      Frontend: 30,
      DevOps: 100,
    },
    links: {
      github: "https://link.scent-jo.me/SSACLE/github",
      presentation: "https://link.scent-jo.me/SSACLE/presentation",
      figma: "https://link.scent-jo.me/SSACLE/figma",
    },
    skills: [
      "Vite",
      "npm",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Google Analytics",
      "AWS EC2",
      "Nginx",
      "Docker",
      "Jenkins",
      "WebRTC",
    ],
  },
  {
    type: "etc",
    id: 4,
    title: "Random Team Maker",
    name: "Random Team Maker",
    status: "Completed",
    date: {
      start: "2024-08-07",
      end: "2024-11-31",
    },
    description:
      "수작업으로 점심식사를 함께할 조를 정하던 반복적인 과정을 자동화하기 위해 개발한 조 편성 봇",
    image: "",
    members: {},
    roles: {},
    links: {
      github: "https://github.com/pcjo1202/SSAFY_TeamMaker",
    },
    skills: ["TypeScript", "Node.js", "MySQL", "GitHub Actions"],
  },
  {
    type: "etc",
    id: 5,
    title: "링크 단축 서비스",
    name: "Link Shortener",
    status: "Completed",
    date: {
      start: "2025-07-25",
      end: "2025-07-27",
    },
    description:
      "긴 링크들을 짧은 링크(나의 도메인)로 리다이렉트하는 설정을 자동으로 관리하는 서비스",
    image: "",
    members: {},
    roles: {},
    links: {
      github: "https://github.com/pcjo1202/portfo,lio-redirects",
    },
    skills: ["TypeScript", "Node.js", "Nginx", "Docker", "GitHub Actions"],
  },
];

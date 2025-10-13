export type Job = "Frontend" | "Backend" | "DevOps";
export type Topic =
  | "Language"
  | "Framework"
  | "Library"
  | "Tool"
  | "AI"
  | "etc";

export type skill_name =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Next.js"
  | "Vue.js"
  | "Styled-Components"
  | "Tailwind CSS"
  | "PostCSS"
  | "Zustand"
  | "TanStack Query"
  | "Redux"
  | "Google Analytics"
  | "React Native (Expo)"
  | "Axios"
  | "Framer Motion"
  | "Java"
  | "Node.js"
  | "Spring Boot"
  | "Express.js"
  | "MySQL"
  | "Firebase"
  | "AWS EC2"
  | "Nginx"
  | "Docker"
  | "GitHub Actions"
  | "Jenkins"
  | "Git"
  | "Jira"
  | "Notion"
  | "Figma"
  | "VS Code"
  | "Cursor AI"
  | "IntelliJ"
  | "WebRTC"
  | "WebSocket"
  | "Claude"
  | "ChatGPT"
  | "Perplexity"
  | "Google Gemini"
  | "Vite"
  | "pnpm"
  | "npm";

export interface Skill {
  job: Job;
  topic: Topic;
  name: skill_name;
  icon: string;
}

const Skills: Skill[] = [
  // Frontend - Language
  {
    job: "Frontend",
    topic: "Language",
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    job: "Frontend",
    topic: "Language",
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    job: "Frontend",
    topic: "Language",
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    job: "Frontend",
    topic: "Language",
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  // Frontend - Framework
  {
    job: "Frontend",
    topic: "Framework",
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    job: "Frontend",
    topic: "Framework",
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    job: "Frontend",
    topic: "Framework",
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },

  // Frontend - Styling
  {
    job: "Frontend",
    topic: "Library",
    name: "Styled-Components",
    icon: "https://cdn.simpleicons.org/styledcomponents/DB7093",
  },
  {
    job: "Frontend",
    topic: "Library",
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    job: "Frontend",
    topic: "Library",
    name: "PostCSS",
    icon: "https://cdn.simpleicons.org/postcss/DD3A0A",
  },

  // Frontend - State / Data
  {
    job: "Frontend",
    topic: "Library",
    name: "Zustand",
    icon: "",
  },
  {
    job: "Frontend",
    topic: "Library",
    name: "TanStack Query",
    icon: "https://cdn.simpleicons.org/reactquery/FF4154",
  },
  {
    job: "Frontend",
    topic: "Library",
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },

  // Frontend - Analytics / Mobile
  {
    job: "Frontend",
    topic: "Library",
    name: "Google Analytics",
    icon: "https://cdn.simpleicons.org/googleanalytics/E37400",
  },
  {
    job: "Frontend",
    topic: "Framework",
    name: "React Native (Expo)",
    icon: "https://cdn.simpleicons.org/expo/000020",
  },

  // Frontend - Libraries
  {
    job: "Frontend",
    topic: "Library",
    name: "Axios",
    icon: "https://cdn.simpleicons.org/axios/5A29E4",
  },
  {
    job: "Frontend",
    topic: "Library",
    name: "Framer Motion",
    icon: "https://cdn.simpleicons.org/framer/0055FF",
  },

  // Backend - Language / Framework
  {
    job: "Backend",
    topic: "Language",
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    job: "Backend",
    topic: "Framework",
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    job: "Backend",
    topic: "Framework",
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    job: "Backend",
    topic: "Framework",
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  // Backend - Database
  {
    job: "Backend",
    topic: "etc",
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    job: "Backend",
    topic: "etc",
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // DevOps - Cloud / Infra
  {
    job: "DevOps",
    topic: "etc",
    name: "AWS EC2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    job: "DevOps",
    topic: "etc",
    name: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  {
    job: "DevOps",
    topic: "etc",
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    job: "DevOps",
    topic: "etc",
    name: "GitHub Actions",
    icon: "https://cdn.simpleicons.org/githubactions/2088FF",
  },
  {
    job: "DevOps",
    topic: "etc",
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },

  // Tools
  {
    job: "Frontend",
    topic: "Tool",
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    job: "Frontend",
    topic: "Tool",
    name: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    job: "Frontend",
    topic: "Tool",
    name: "Notion",
    icon: "https://cdn.simpleicons.org/notion/000000",
  },
  {
    job: "Frontend",
    topic: "Tool",
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    job: "Frontend",
    topic: "Tool",
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    job: "Frontend",
    topic: "Tool",
    name: "Cursor AI",
    icon: "https://cdn.simpleicons.org/cursor/2688D4",
  },
  {
    job: "Frontend",
    topic: "Tool",
    name: "IntelliJ",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
  },

  // Networking / Other
  {
    job: "Frontend",
    topic: "etc",
    name: "WebRTC",
    icon: "https://cdn.simpleicons.org/webrtc/333333",
  },
  {
    job: "Frontend",
    topic: "etc",
    name: "WebSocket",
    icon: "https://cdn.simpleicons.org/socketdotio/010101",
  },
  {
    job: "Frontend",
    topic: "etc",
    name: "pnpm",
    icon: "https://cdn.simpleicons.org/pnpm/CB3837",
  },
  {
    job: "Frontend",
    topic: "etc",
    name: "Vite",
    icon: "https://cdn.simpleicons.org/vite/646CFF",
  },

  // AI
  {
    job: "Frontend",
    topic: "AI",
    name: "Claude",
    icon: "https://cdn.simpleicons.org/anthropic/000000",
  },
  {
    job: "Frontend",
    topic: "AI",
    name: "ChatGPT",
    icon: "https://cdn.simpleicons.org/openai/412991",
  },
  {
    job: "Frontend",
    topic: "AI",
    name: "Perplexity",
    icon: "https://cdn.simpleicons.org/perplexity/1E88E5",
  },
  {
    job: "Frontend",
    topic: "AI",
    name: "Google Gemini",
    icon: "https://cdn.simpleicons.org/googlegemini/8E75FF",
  },
];
export default Skills;

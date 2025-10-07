"use client";

import { useHash } from "@/hooks/useHash";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "소개", href: "#about" },
  { label: "핵심 역량", href: "#core-ability" },
  { label: "기술 스택", href: "#skills" },
  { label: "프로젝트", href: "#projects" },
  { label: "경험", href: "#experience" },
  { label: "블로그", href: "#blog" },
];

export default function Header() {
  const hash = useHash();

  return (
    <header className="fixed top-6 z-50 ">
      <nav className="rounded-full w-auto px-4 py-2 backdrop-blur-xs bg-gray-200/70">
        <ul className="grid grid-cols-6 items-center justify-center gap-5">
          {navigation.map(({ label, href }) => (
            <li
              className={cn(
                "cursor-pointer text-center hover:bg-white h-full rounded-full px-4 py-1 transition",
                hash === href && "bg-white ring-1 ring-blue-200"
              )}
              key={href}
              onClick={() => {
                window.location.hash = href;
              }}
            >
              <span className="text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

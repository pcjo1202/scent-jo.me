"use client";

import { useHash } from "@/hooks/useHash";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "소개", href: "#about" },
  { label: "핵심 역량", href: "#core-ability" },
  { label: "기술 스택", href: "#skills" },
  { label: "프로젝트", href: "#projects" },
  { label: "경험", href: "#experience" },
  { label: "블로그", href: "#blog" },
  { label: "연락하기", href: "#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const hash = useHash();
  return (
    <nav className="flex justify-center w-full">
      {/* desktop */}
      <div className="hidden md:block px-4 py-2 backdrop-blur-xs ">
        <ul className="flex flex-col gap-5">
          {navigation.map(({ label, href }) => (
            <li
              className={cn(
                "cursor-pointer text-center hover:text-blue-500 hover:-translate-y-1 h-full rounded-full px-4 py-1 transition",
                hash === href && "text-blue-500"
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
      </div>
      {/* mobile */}
      <div className="md:hidden backdrop-blur-sm ">
        <div className="flex w-full justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <MenuIcon className="size-8 text-gray-400 cursor-pointer hover:scale-110 transition-all duration-300" />
          </button>
        </div>
        {isOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col justify-center gap-5">
              {navigation.map(({ label, href }) => (
                <li
                  key={href}
                  className="hover:text-blue-500 cursor-pointer px-4 py-2 transition-all duration-300"
                >
                  <span className="text-base">{label}</span>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
}

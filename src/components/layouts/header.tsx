"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import {
  CodeIcon,
  FolderIcon,
  HomeIcon,
  MessageCircleIcon,
  MoonIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const navigation = [
  { label: "Home", href: "/#home", icon: HomeIcon },
  { label: "About", href: "/#about", icon: UserIcon },
  { label: "Skills", href: "/#skills", icon: CodeIcon },
  { label: "Projects", href: "/#projects", icon: FolderIcon },
  { label: "Contact", href: "/#contact", icon: MessageCircleIcon },
];

export default function Header() {
  const { isScrolled, scrollY } = useScrollPosition();

  const isTop = scrollY < 50;

  return (
    <>
      <header
        className={cn(
          "flex fixed top-0 z-50 w-full justify-between items-center md:px-20 px-10 py-4",
          "transition-all duration-300 ease-out",
          isScrolled && !isTop ? "" : ""
        )}
      >
        {/* logo */}
        <div
          className={cn(
            "basis-1/3",
            "text-xl font-bold transition-all duration-300 ease-out",
            isTop ? "opacity-100" : "opacity-0"
          )}
        >
          <Link href="/">CHANG JO's Portfolio</Link>
        </div>

        {/* navigation - Desktop */}
        <div className="flex justify-center items-center gap-8 flex-1">
          <nav className="md:flex hidden">
            <ul className="flex gap-8">
              {navigation.map(({ label, href }) => {
                return (
                  <li
                    key={href}
                    className="text-gray-400 text-sm font-bold hover:text-black transition-all hover:scale-110"
                  >
                    <Link href={href}>{label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="hidden lg:flex items-center justify-end gap-4 basis-1/3">
          <button className="text-sm font-medium cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-gray-200 rounded-xl p-1">
            <MoonIcon strokeWidth={2} />
            {/* <SunIcon strokeWidth={2} /> */}
          </button>
          <InteractiveHoverButton className="text-sm font-medium ">
            연락하기
          </InteractiveHoverButton>
        </div>
      </header>

      {/* navigation - Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
        <ul className="flex justify-around items-center py-2 px-4">
          {navigation.map(({ label, href, icon: Icon }) => {
            return (
              <li key={href} className="flex-1">
                <Link
                  href={href}
                  className="flex flex-col items-center justify-center py-2 px-1 text-xs font-medium text-gray-600 hover:text-black transition-colors"
                >
                  <Icon size={20} className="mb-1" />
                  <span className="text-center">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

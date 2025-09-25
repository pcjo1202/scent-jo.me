"use client";

import { cn, throttle } from "@/lib/utils";
import {
  CodeIcon,
  FolderIcon,
  HomeIcon,
  MessageCircleIcon,
  MoonIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const navigation = [
  { label: "Home", href: "/#home", icon: HomeIcon },
  { label: "About", href: "/#about", icon: UserIcon },
  { label: "Skills", href: "/#skills", icon: CodeIcon },
  { label: "Projects", href: "/#projects", icon: FolderIcon },
  { label: "Contact", href: "/#contact", icon: MessageCircleIcon },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<"up" | "down">("up");
  const [isTop, setIsTop] = useState(true);
  const lastScrollY = useRef(0); // 마지막 스크롤 위치

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY; // 현재 스크롤 위치
      let isUpScroll = false;

      if (currentScrollY < 5) {
        setIsScrolled("up");
        setIsTop(true);
        return;
      }

      // 스크롤 방향이 위로 올라가는 경우
      if (currentScrollY < lastScrollY.current) {
        isUpScroll = true;
      }

      if (Math.abs(currentScrollY - lastScrollY.current) > 100) {
        setIsScrolled(isUpScroll ? "up" : "down");
        setIsTop(false);
        lastScrollY.current = currentScrollY;
      }
    }, 100),
    [setIsScrolled, setIsTop]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "flex fixed top-0 z-50 w-full justify-between items-center md:px-20 px-10 py-4",
          "transition-all duration-300 ease-out",
          isScrolled === "up"
            ? isTop
              ? "bg-transparent"
              : "translate-y-0 bg-gray-200/10 backdrop-blur-sm"
            : "translate-y-[-100%] bg-transparent"
        )}
      >
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">CHANG JO's Portfolio</Link>
        </div>

        {/* navigation - Desktop */}
        <div className="flex items-center gap-8">
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
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-medium cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-gray-200 rounded-xl p-1">
              <MoonIcon strokeWidth={2} />
              {/* <SunIcon strokeWidth={2} /> */}
            </button>
            <InteractiveHoverButton className="text-sm font-medium ">
              연락하기
            </InteractiveHoverButton>
          </div>
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

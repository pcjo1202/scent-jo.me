"use client";

import { cn, throttle } from "@/lib/utils";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
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
    <header
      className={cn(
        "flex fixed top-0 z-50 w-full justify-between items-center px-20 py-6 ",
        "transition-all duration-300 ease-out",
        isScrolled === "up"
          ? isTop
            ? "bg-transparent"
            : "translate-y-0 bg-black/10 backdrop-blur-sm"
          : "translate-y-[-100%] bg-transparent"
      )}
    >
      <div className="text-2xl font-bold">
        <Link href="/">CHANG JO's Portfolio</Link>
      </div>
      <div className="flex items-center gap-8">
        <nav>
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
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium">다크모드</button>
          <button className="text-sm font-medium">연락하기</button>
        </div>
      </div>
    </header>
  );
}

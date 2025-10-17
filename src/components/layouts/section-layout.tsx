"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import FadeIn from "../animated/fade-in";

interface SectionLayoutProps {
  id: string;
  title: string;
  direction?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export default function SectionLayout({
  id,
  title,
  direction = "left",
  children,
  className,
}: SectionLayoutProps) {
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         console.log(entry);
  //       });
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.1,
  //     }
  //   );
  //   observer.observe(ref.current as Element);

  //   return () => observer.disconnect();
  // }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={cn("min-h-dvh w-full py-16 lg:px-32 px-18", className)}
    >
      <div className="flex w-full flex-col gap-8">
        <div
          className={cn(
            "w-full flex items-center justify-start gap-4",
            direction === "right" && "justify-end"
          )}
        >
          {direction === "right" && (
            <div className="h-px basis-1/3 bg-gray-200"></div>
          )}
          <FadeIn direction="right">
            <h2 className="text-2xl md:text-3xl font-bold"># {title}</h2>
          </FadeIn>
          {direction === "left" && (
            <div className="h-px basis-1/3 bg-gray-200"></div>
          )}
        </div>
        <div className="h-full">{children}</div>
      </div>
    </section>
  );
}

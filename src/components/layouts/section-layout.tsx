import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  id: string;
  title: string;
  direction?: "left" | "right";
  children: React.ReactNode;
}

export default function SectionLayout({
  id,
  title,
  direction = "left",
  children,
}: SectionLayoutProps) {
  return (
    <section id={id} className="h-dvh w-full py-30">
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
          <h2 className="text-2xl md:text-3xl font-bold"># {title}</h2>
          {direction === "left" && (
            <div className="h-px basis-1/3 bg-gray-200"></div>
          )}
        </div>
        <div className="h-full">{children}</div>
      </div>
    </section>
  );
}

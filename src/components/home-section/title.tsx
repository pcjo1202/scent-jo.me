import { cn } from "@/lib/utils";

export default function Title({ isLoading }: { isLoading?: boolean }) {
  return (
    <div id="title" className="transition-all duration-1000 ease-in-out">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h1
          className={cn(
            "text-blue-500 text-lg md:text-2xl font-bold",
            "transition-all duration-1000 ease-in-out",
            isLoading
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0 delay-300"
          )}
        >
          Frontend Developer
        </h1>
        <h2
          className={cn(
            "text-white text-2xl md:text-4xl font-bold",
            "transition-all duration-1000 ease-in-out",
            isLoading
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0 delay-500"
          )}
        >
          Park Chang Jo
        </h2>
      </div>
    </div>
  );
}

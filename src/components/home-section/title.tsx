import { cn } from "@/lib/utils";

export default function Title({ isLoading }: { isLoading: boolean }) {
  return (
    <div
      id="title"
      className={cn(
        "transition-all duration-1000 ease-in-out",
        isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h1 className="text-blue-500 text-lg md:text-2xl font-bold">
          Frontend Developer
        </h1>
        <h2 className="text-white text-2xl md:text-4xl font-bold">
          Park Chang Jo
        </h2>
      </div>
    </div>
  );
}

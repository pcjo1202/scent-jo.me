import { cn } from "@/lib/utils";

export default function FirstLoading({ isLoading }: { isLoading: boolean }) {
  return (
    <div
      id="first-loading"
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100",
        "transition-all duration-1000 ease-in-out",
        isLoading ? "-translate-y-10" : "-translate-y-80"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-blue-500 text-2xl font-bold">Frontend Developer</h1>
        <h2 className="text-white text-4xl font-bold">Park Chang Jo</h2>
      </div>
    </div>
  );
}

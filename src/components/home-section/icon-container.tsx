import { cn } from "@/lib/utils";
import GlassIcons from "../GlassIcons";
import BlogIcon from "../icons/blog-icon";
import GithubIcon from "../icons/github-icon";
import PortfolioIcon from "../icons/portfolio-icon";

export default function IconContainer({ isLoading }: { isLoading: boolean }) {
  const items = [
    { icon: <GithubIcon />, color: "white", label: "Github" },
    { icon: <BlogIcon />, color: "white", label: "Tech Blog" },
    { icon: <PortfolioIcon />, color: "white", label: "Portfolio" },
  ];
  return (
    <div
      className={cn(
        "absolute md:top-1/2 top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 -translate-y-1/3 z-100",
        "transition-all duration-500 ease-out delay-1000",
        isLoading ? "opacity-0" : "opacity-100"
      )}
    >
      <ul className="">
        <GlassIcons
          items={items}
          className="flex flex-wrap gap-20 justify-center"
        />
      </ul>
    </div>
  );
}

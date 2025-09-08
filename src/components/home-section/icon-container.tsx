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
        "transition-all duration-500 ease-out delay-1000",
        isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
      )}
    >
      <ul className="">
        <GlassIcons
          items={items}
          className="flex flex-wrap gap-8 md:gap-16 justify-center"
        />
      </ul>
    </div>
  );
}

import Link from "next/link";
import BlogIcon from "../icons/blog-icon";
import GithubIcon from "../icons/github-icon";
import PortfolioIcon from "../icons/portfolio-icon";

const links = [
  {
    icon: <GithubIcon />,
    color: "white",
    label: "Github",
    href: "https://github.com/pcjo1202",
  },
  {
    icon: <BlogIcon />,
    color: "white",
    label: "Tech Blog",
    href: "https://velog.io/@pcjo1202",
  },
  {
    icon: <PortfolioIcon />,
    color: "white",
    label: "Portfolio",
    href: "https://link.scent-jo.me/portfolio/pdf",
  },
];

export default function IconContainer({ isLoading }: { isLoading?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <ul className="flex flex-row items-center justify-center gap-6">
        {links.map(({ href, icon }) => (
          <li
            className="hover:ring-2 hover:ring-gray-300 transition cursor-pointer p-4 rounded-xl bg-gray-200/70"
            key={href}
          >
            <Link target="_blank" href={href}>
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

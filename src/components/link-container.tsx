import BlogIcon from "@/components/icons/blog-icon";
import GithubIcon from "@/components/icons/github-icon";
import PortfolioIcon from "@/components/icons/portfolio-icon";
import Link from "next/link";

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

export default function LinksContainer() {
  return (
    <ul className="flex flex-col items-center justify-center gap-6">
      {links.map(({ href, icon }) => (
        <li className="transition cursor-pointer hover:scale-110" key={href}>
          <Link target="_blank" href={href}>
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}

import Image from "next/image";

export default function GithubIcon() {
  return (
    <div className="relative w-12 h-12 md:w-16 md:h-16">
      <Image src="/assets/github_icon.svg" alt="Github" fill />
    </div>
  );
}

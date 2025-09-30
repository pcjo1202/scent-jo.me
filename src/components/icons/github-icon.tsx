import Image from "next/image";

export default function GithubIcon() {
  return (
    <div className="relative w-8 h-8">
      <Image src="/assets/github_icon.svg" alt="Github" fill />
    </div>
  );
}

import Image from "next/image";

export default function BlogIcon() {
  return (
    <div className="relative w-8 h-8 ">
      <Image src="/assets/blog_icon.svg" alt="Blog" fill />
    </div>
  );
}

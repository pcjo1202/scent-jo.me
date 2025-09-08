import Image from "next/image";

export default function BlogIcon() {
  return (
    <div className="relative w-12 h-12 md:w-16 md:h-16">
      <Image src="/assets/blog_icon.svg" alt="Blog" fill />
    </div>
  );
}

import Image from "next/image";

export default function AboutProfileImage() {
  return (
    <div className="relative aspect-square size-80">
      <Image
        className="object-contain"
        src="/assets/profile.png"
        alt="about"
        fill
      />
    </div>
  );
}

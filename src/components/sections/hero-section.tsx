import IconContainer from "@/components/home-section/icon-container";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div id="home" className="h-dvh w-full">
      <div className="flex flex-col items-center justify-between h-full gap-6">
        {/* title */}
        <div className="flex flex-col mt-40 items-center justify-center gap-6">
          <h1 className="text-4xl font-bold flex justify-center items-center gap-2">
            <span>프론트엔드 개발자</span>
            <span className="text-blue-500">박창조</span>
            <span>입니다. </span>
          </h1>
          <div className="text-lg text-gray-500 font-bold">
            <p className="text-center">
              사용자를 먼저 생각하는{" "}
              <span className="text-black">역지사지</span> 마인드
            </p>
            <p className="text-center">
              동료와 <span className="text-black">함께 성장</span>하는
              개발자입니다.
            </p>
          </div>
        </div>
        {/* link */}
        <IconContainer />
        {/* 사진? */}
        <div className="flex flex-col items-center justify-center gap-6">
          <Image
            src="/assets/profile.png"
            alt="Profile"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

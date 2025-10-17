import { ChevronsDownIcon, DownloadIcon } from "lucide-react";
import FadeIn from "../animated/fade-in";
import Description from "../ui/description";

export default function HeroSection() {
  return (
    <div id="home" className="h-dvh w-full snap-start">
      <div className="flex flex-col items-start justify-center h-full pb-40 gap-6">
        {/* title */}
        <div className="w-full flex flex-col justify-center gap-6">
          {/* frontend developer */}
          <FadeIn>
            <h2 className="text-xl md:text-3xl font-bold flex flex-col justify-center  gap-2">
              <span className="">Frontend Developer</span>
            </h2>
          </FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold flex flex-col justify-center  gap-2">
            <FadeIn delay={0.5}>
              <span className="text-black">Park Chang Jo</span>
            </FadeIn>
            <FadeIn delay={0.7}>
              <span className="text-gray-400">I build Web for people</span>
            </FadeIn>
          </h1>
        </div>
        {/* description */}
        <Description>
          <p>
            안녕하세요. 사용자와 동료의 상황에 몰입해 탁월한 경험을 고민하는
            개발자 박창조 입니다.
            <br />
            React, Next.js를 주로 사용하여 모던한 Web Application을 만들고,
            <br />
            업무를 할 때 항상 &quot;왜?&quot; 를 생각하며, 계속 더 나은 방법을
            고민합니다.
            <br />
            <br />
            현재는, 함께 가치있는 제품을 만들고, 함께 성장 할 수 있는 곳을 찾고
            있습니다.
          </p>
        </Description>
        <button className="border border-gray-400 hover:bg-gray-500 hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 rounded-xl px-4 py-2">
          <span>이력서 다운로드</span>
          <DownloadIcon className="w-4 h-4" />
        </button>
      </div>
      {/* scroll down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronsDownIcon className="w-10 h-10 text-gray-400" />
      </div>
    </div>
  );
}

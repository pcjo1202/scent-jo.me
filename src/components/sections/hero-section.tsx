import { ChevronsDownIcon } from "lucide-react";
import FadeIn from "../animated/fade-in";
import Description from "../ui/description";
import ResumeButton from "./hero/resume-button";

export default function HeroSection() {
  return (
    <div id="home" className="h-dvh w-full snap-start lg:px-32 px-8">
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
            <FadeIn delay={0.2}>
              <span className="text-black">Park Chang Jo</span>
            </FadeIn>
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold flex flex-col justify-center  gap-2">
            <FadeIn delay={0.3}>
              <span className="text-gray-400">I build Web for people</span>
            </FadeIn>
          </h1>
        </div>
        {/* description */}
        <FadeIn delay={0.6}>
          <Description>
            <p>
              안녕하세요. 사용자와 동료의 상황에 몰입해 탁월한 경험을 고민하는
              개발자 박창조 입니다.
              <br />
              문제를 마주하면, <strong>&quot;왜?&quot;</strong>,{" "}
              <strong>&quot;어떻게?&quot;</strong>를 생각하며,
              <br className="md:hidden" /> 계속 더 나은 방법을 고민합니다.
              <br />
              <br />
              현재는, 함께 가치있는 제품을 만들고, 함께 성장 할 수 있는 곳을
              찾고 있습니다.
            </p>
          </Description>
        </FadeIn>
        <FadeIn direction="right" delay={1.2}>
          <ResumeButton />
        </FadeIn>
      </div>
      {/* scroll down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronsDownIcon className="w-10 h-10 text-gray-400" />
      </div>
    </div>
  );
}

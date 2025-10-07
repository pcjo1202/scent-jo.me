import { ChevronsDownIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <div id="home" className="h-dvh w-full snap-start">
      <div className="flex flex-col items-center justify-center h-full pb-40 gap-6">
        {/* title */}
        <div className="w-full flex flex-col justify-center gap-6">
          {/* frontend developer */}
          <h2 className="text-xl md:text-3xl font-bold flex flex-col justify-center  gap-2">
            <span className="">Frontend Developer</span>
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold flex flex-col justify-center  gap-2">
            <span className="text-black">Park Chang Jo</span>
            <span className="text-gray-400">I build Web for people</span>
          </h1>
        </div>
        {/* description */}
        <div className="w-full flex flex-col justify-center gap-6">
          <div className="text-base md:text-lg text-gray-500 font-bold">
            <p>안녕하세요. 저는 냄새나는 프론트엔드 개발자 박창조입니다.</p>
            <p>
              <span>소프트웨어의 가치</span>가&nbsp;
              <span className="text-blue-400">Code</span>와 &nbsp;
              <span className="text-blue-400">User Experience</span>
              {""}에 스며들도록 개발을 하고 있습니다.
            </p>
          </div>
        </div>
      </div>
      {/* scroll down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronsDownIcon className="w-10 h-10 text-gray-400" />
      </div>
    </div>
  );
}

export default function AboutDescription() {
  return (
    <>
      <div className="w-full flex flex-col justify-center gap-6">
        <div className="text-base md:text-lg text-gray-500 font-bold">
          <p>안녕하세요. 저는 냄새나는 프론트엔드 개발자 박창조입니다.</p>
          <p>
            <span>소프트웨어의 가치</span>가&nbsp;
            <span className="text-blue-400">Code</span>와 &nbsp;
            <span className="text-blue-400">User Experience</span>
            {""}에 스며들도록 개발합니다.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center gap-6">
        <div className="text-base md:text-lg text-gray-500 font-bold">
          <p>
            소프트웨어를 통해 "영향력이 있는 사람" 이 되고 싶은 꿈을 가지고,
            개발자의 길을 걷고 있습니다. 특히 화면을 통해 가장 앞에서 사람들과
            상호작용하며, 가치를 전달해줄 수 있다는 것에 매력을 느껴 프론트엔드
            개발자로 커리어를 쌓아가고 있습니다.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center gap-6">
        <div className="text-base md:text-lg text-gray-500 font-bold">
          <p>
            또한, 동료들의 개발 경험을 위해 자동화, CI/CD, 테스트 등에 관심을
            가지고 있습니다.
          </p>
        </div>
      </div>
    </>
  );
}

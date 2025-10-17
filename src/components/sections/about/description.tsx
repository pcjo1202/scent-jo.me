import Description from "@/components/ui/description";

export default function AboutDescription() {
  return (
    <>
      <Description>
        <p>
          <span>소프트웨어의 가치</span>가&nbsp;
          <span className="text-blue-400">Code</span>와 &nbsp;
          <span className="text-blue-400">User Experience</span>
          {""}에 스며들도록 몰입하고, 고민합니다.
        </p>
      </Description>
      <Description>
        <p>
          저는 &quot;영향력을 전달하는 사람&quot; 이 되고 싶은 꿈을 소프트웨어를
          통해 <strong>실현</strong>하기 위해 노력합니다.
        </p>
      </Description>
      <Description>
        <p>
          특별히 화면을 통해 유저와 상호작용하며,{" "}
          <span className="text-blue-400">가치를 전달해줄 수 있다는 것</span>에
          <br />
          매력을 느껴 프론트엔드 개발자로 커리어를 쌓아가고 있습니다.
        </p>
      </Description>
      <Description>
        <p>
          유저와 동료에 대한{" "}
          <span className="text-blue-400">역지사지의 관점</span>으로 고민하면서{" "}
          <br />
          UI/UX 개선, 성능 최적화, 자동화, CI/CD, 등 개발 프로세스에 관심을
          가지고 있습니다.
        </p>
      </Description>
    </>
  );
}

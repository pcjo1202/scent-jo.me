import AboutDescription from "./description";

export default function AboutContent() {
  return (
    <div className="flex flex-col w-full justify-center gap-8">
      {/* title */}
      <h2 className="text-xl md:text-3xl font-bold ">
        저는 <span className="text-blue-400">향기나는 개발</span>을 합니다.
      </h2>
      {/* description */}
      <AboutDescription />
    </div>
  );
}

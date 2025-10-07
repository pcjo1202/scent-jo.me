import SectionLayout from "../layouts/section-layout";

const abilities = [
  {
    id: 1,
    title: "모던 프론트엔드 개발",
    description:
      "React.js를 이용한 프론트엔드 개발경험이 있으며, Javascript(ES6), typescript에 능숙합니다.\nNext.js와 더불어 핵심적인 React library 활용 경험이 있습니다.",
  },
  {
    id: 2,
    title: "웹사이트 개선 및 최적화",
    description:
      "웹사이트를 개발하고 유지보수하면서, 웹사이트의 성능을 측정하고 개선했습니다.\n또, 검색엔진 최적화 작업을 통해 유입 트래픽을 6개월간 25.6% 증가시킨 경험이 있습니다.",
  },
  {
    id: 3,
    title: "커뮤니케이션 및 협업",
    description:
      "Github 이용한 협업 경험이 있으며, Jira, Slack, Notion 등의 협업 도구 사용 경험도 있습니다.\n기획, 디자인, 총무 등 다양한 직무 경험을 기반으로 다른 직군과 원활한 커뮤니케이션이 가능합니다.",
  },
];

export default function CoreAbilitySection() {
  return (
    <SectionLayout id="core-ability" title="핵심 역량">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {abilities.map((ability) => (
          <div
            key={ability.id}
            className="flex flex-col items-center justify-center gap-4 dark:bg-gray-800 rounded-2xl"
          >
            {/* Image Section */}
            <div className="aspect-square w-full h-60 bg-amber-50"></div>
            <div className="flex flex-col justify-center">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {ability.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                {ability.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

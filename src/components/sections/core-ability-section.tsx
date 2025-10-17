import { Abilities } from "@/data/abilities";
import SectionLayout from "../layouts/section-layout";

export default function CoreAbilitySection() {
  return (
    <SectionLayout id="core-ability" title="핵심 역량">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Abilities.map((ability) => (
          <div
            key={ability.id}
            className="flex flex-col gap-4 dark:bg-gray-800 rounded-2xl"
          >
            {/* Image Section */}
            <div className="aspect-square w-full h-60 bg-amber-200 rounded-xl"></div>
            <div className="flex flex-col justify-center">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {ability.title}
              </h3>

              {/* Description */}
              <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                {ability.description.map((desc, index) => (
                  <p key={index}>
                    <span>{desc}</span>
                    <br />
                    <br />
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

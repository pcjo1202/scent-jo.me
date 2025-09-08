"use client";

import LightRays from "@/components/LightRays";
import { useEffect, useState } from "react";
import ContactInfo from "./contact-info";
import IconContainer from "./icon-container";
import Title from "./title";

export default function HomeSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="h-dvh w-full relative z-0">
      {/* Background LightRays */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={2}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.8}
        noiseAmount={0.1}
        distortion={0.05}
        className="bg-background"
      />

      {/* Main Content Container */}
      <div className="h-full w-full flex flex-col justify-between items-center px-4 py-8 md:py-12 absolute top-0 left-0 z-10">
        <div className="flex-shrink-0 mt-8 md:mt-16">
          <Title isLoading={isLoading} />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <IconContainer isLoading={isLoading} />
        </div>

        <div className="flex-shrink-0 mb-4 md:mb-8">
          <ContactInfo isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

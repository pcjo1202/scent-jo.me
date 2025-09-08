"use client";

import LightRays from "@/components/LightRays";
import { useEffect, useState } from "react";
import ContactInfo from "./contact-info";
import FirstLoading from "./first-loading";
import IconContainer from "./icon-container";

export default function HomeSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="h-dvh w-full relative z-0">
      <FirstLoading isLoading={isLoading} />
      <IconContainer isLoading={isLoading} />
      <ContactInfo isLoading={isLoading} />
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
    </div>
  );
}

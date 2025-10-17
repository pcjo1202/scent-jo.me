"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export default function FadeIn({
  delay = 0,
  duration = 0.7,
  children,
  direction = "down",
  distance = 50,
}: FadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      default:
        return { opacity: 0, y: -distance };
    }
  };

  const getFinalPosition = () => {
    return { opacity: 1, y: 0, x: 0 };
  };

  const variants = {
    hidden: getInitialPosition(),
    visible: getFinalPosition(),
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

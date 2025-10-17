import { throttle } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

export function useScrollUpDown() {
  const [isScrolled, setIsScrolled] = useState<"up" | "down">("up");
  const [isTop, setIsTop] = useState(true);
  const lastScrollY = useRef(0); // 마지막 스크롤 위치

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY; // 현재 스크롤 위치
      let isUpScroll = false;

      if (currentScrollY < 5) {
        setIsScrolled("up");
        setIsTop(true);
        return;
      }

      // 스크롤 방향이 위로 올라가는 경우
      if (currentScrollY < lastScrollY.current) {
        isUpScroll = true;
      }

      if (Math.abs(currentScrollY - lastScrollY.current) > 100) {
        setIsScrolled(isUpScroll ? "up" : "down");
        setIsTop(false);
        lastScrollY.current = currentScrollY;
      }
    }, 100),
    [setIsScrolled, setIsTop]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { isScrolled, isTop };
}

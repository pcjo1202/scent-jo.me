import { useCallback, useEffect, useRef, useState } from "react";

interface UseScrollPositionOptions {
  threshold?: number;
}

export function useScrollPosition({
  threshold = 100,
}: UseScrollPositionOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false); // 스크롤 여부
  const [scrollY, setScrollY] = useState(0); // 스크롤 위치
  const rafId = useRef<number | null>(null); // RAF 애니메이션 아이디
  const lastScrollY = useRef(0); // 마지막 스크롤 위치
  const lastIsScrolled = useRef(false); // 마지막 스크롤 상태

  const handleScroll = useCallback(() => {
    // RAF로 스크롤 이벤트 최적화
    if (rafId.current) {
      cancelAnimationFrame(rafId.current); // 이전 애니메이션 취소
    }

    rafId.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const currentIsScrolled = currentScrollY > threshold;

      // 임계값 확인으로 불필요한 리렌더링 방지 (5px 이상 변화시에만 업데이트)
      const shouldUpdateScrollY =
        Math.abs(currentScrollY - lastScrollY.current) > 5;
      const shouldUpdateIsScrolled =
        currentIsScrolled !== lastIsScrolled.current;

      if (shouldUpdateScrollY || shouldUpdateIsScrolled) {
        if (shouldUpdateScrollY) {
          setScrollY(currentScrollY);
          lastScrollY.current = currentScrollY;
        }

        if (shouldUpdateIsScrolled) {
          setIsScrolled(currentIsScrolled);
          lastIsScrolled.current = currentIsScrolled;
        }
      }
    });
  }, [threshold]);

  useEffect(() => {
    // 초기 스크롤 위치 설정
    const initialScrollY = window.scrollY;
    const initialIsScrolled = initialScrollY > threshold;

    setScrollY(initialScrollY);
    setIsScrolled(initialIsScrolled);
    lastScrollY.current = initialScrollY;
    lastIsScrolled.current = initialIsScrolled;

    // 패시브 이벤트 리스너로 성능 향상
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll, threshold]);

  return { isScrolled, scrollY };
}

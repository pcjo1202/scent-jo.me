import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 개선 (진짜 throttle)
export function throttle(func: () => void, delay = 100) {
  let lastExecuted = 0;
  let timeout: NodeJS.Timeout | null = null;

  return () => {
    const now = Date.now();

    if (now - lastExecuted >= delay) {
      // 즉시 실행
      lastExecuted = now;
      func();
    } else {
      // 지연 실행으로 마지막 호출 보장
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(
        () => {
          lastExecuted = Date.now();
          func();
          timeout = null;
        },
        delay - (now - lastExecuted)
      );
    }
  };
}

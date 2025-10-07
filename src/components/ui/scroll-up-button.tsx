"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollUpButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center justify-center p-1.5 cursor-pointer hover:scale-110 transition-all duration-300 bg-black rounded-full"
    >
      <ArrowUp className="size-6 text-white" />
    </button>
  );
}

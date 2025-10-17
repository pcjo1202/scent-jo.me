"use client";

import { DownloadIcon } from "lucide-react";

export default function ResumeButton() {
  return (
    <button //
      onClick={() => {
        window.open("/files/resume.pdf", "_blank");
      }}
      className="border border-gray-400 hover:bg-gray-500 hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 rounded-xl px-4 py-2"
    >
      <span>이력서 다운로드</span>
      <DownloadIcon className="w-4 h-4" />
    </button>
  );
}

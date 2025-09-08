import { cn } from "@/lib/utils";

interface ContactInfoProps {
  isLoading: boolean;
}

export default function ContactInfo({ isLoading }: ContactInfoProps) {
  return (
    <div
      className={cn(
        "transition-all duration-700 ease-out delay-2000",
        isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      )}
    >
      <div className="flex flex-col items-center gap-3 text-white">
        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 items-center">
          <a
            href="mailto:ckdwhdev@gmail.com"
            className="group flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-xs md:text-sm group-hover:text-blue-400 transition-colors">
              ckdwhdev@gmail.com
            </span>
          </a>

          <a
            href="tel:01053921142"
            className="group flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-xs md:text-sm group-hover:text-green-400 transition-colors">
              010-5392-1142
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

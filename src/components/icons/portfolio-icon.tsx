import Image from "next/image";

export default function PortfolioIcon() {
  return (
    <div className="relative w-12 h-12 md:w-16 md:h-16">
      <Image src="/assets/portfolio_icon.svg" alt="Portfolio" fill />
    </div>
  );
}

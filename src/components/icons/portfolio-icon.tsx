import Image from "next/image";

export default function PortfolioIcon() {
  return (
    <div className="relative w-8 h-8">
      <Image src="/assets/portfolio_icon.svg" alt="Portfolio" fill />
    </div>
  );
}

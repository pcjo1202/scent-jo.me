import Footer from "./footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex bg-gray-50 flex-col items-center justify-center w-dvw min-h-screen">
      {/* <Header /> */}
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}

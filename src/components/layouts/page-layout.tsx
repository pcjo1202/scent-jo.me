import Footer from "./footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex bg-gray-50 flex-col items-center justify-center min-h-screen min-w-md">
      {/* <Header /> */}
      <main className="flex-1 w-full px-18 md:px-34">{children}</main>
      <Footer />
    </div>
  );
}

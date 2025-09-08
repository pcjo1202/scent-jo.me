import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

const Pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "향기나는 개발자 박창조",
  description:
    "안녕하세요. 동료와 사용자에게 탁월한 경험을 전달하는 프론트엔드 개발자 박창조입니다.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    images: ["/favicon.png"],
  },
  metadataBase: new URL("https://scent-jo.me"),
  alternates: {
    canonical: "https://scent-jo.me",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
  appleWebApp: {
    title: "향기나는 개발자 박창조",
    statusBarStyle: "black-translucent",
  },
  authors: [{ name: "박창조", url: "https://scent-jo.me" }],
  creator: "박창조",
  publisher: "박창조",
  category: "technology",
  keywords: [
    "프론트엔드",
    "개발자",
    "박창조",
    "향기나는 개발자",
    "포트폴리오",
    "신입",
    "프론트엔드 개발자",
  ],
  applicationName: "향기나는 개발자 박창조",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={` ${Pretendard.variable} ${notoSansKr.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

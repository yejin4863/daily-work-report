import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나의 일일 업무보고",
  description: "직원 업무보고, 주요 프로젝트 관리와 관리자 승인을 한곳에서 관리합니다.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}

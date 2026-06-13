import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/context";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "张文冠 | 大模型应用开发工程师",
  description:
    "张文冠的个人作品集 —— 大模型应用开发工程师，专注 RAG 与 Agent 系统工程。西安电子科技大学硕士 · ISN 国家重点实验室。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>
          <Navbar />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}

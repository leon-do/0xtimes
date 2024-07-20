import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const font = Syne({
  subsets: ["latin"],
  weight: "600"
});

export const metadata: Metadata = {
  title: "0xTimes",
  description: "The Web3 Email Archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-yellow-50">
      <body className={font.className}>{children}</body>
    </html>
  );
}

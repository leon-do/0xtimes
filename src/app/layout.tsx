import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";

const font = Archivo_Black({
  subsets: ["latin"],
  weight: "400"
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
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

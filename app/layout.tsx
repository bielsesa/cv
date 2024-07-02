import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firacode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biel Serrano",
  description: "Biel Serrano's CV, created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firacode.className}>{children}</body>
    </html>
  );
}

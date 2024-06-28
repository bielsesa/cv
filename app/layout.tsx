import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinsans = Josefin_Sans({ subsets: ["latin"] });

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
      <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
      </style>
      </head>
      <body className={josefinsans.className}>{children}</body>
    </html>
  );
}

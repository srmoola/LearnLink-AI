import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnLink",
  description: "Created by Satyadev Moolagani at Skyline Web Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/learnlinkicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

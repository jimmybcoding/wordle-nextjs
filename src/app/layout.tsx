import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./darkMode/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordle Clone",
  description: "Wordle clone to practice with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${inter.className} bg-emerald-400 dark:bg-slate-900`}>{children}</body>
      </Provider>
    </html>
  );
}

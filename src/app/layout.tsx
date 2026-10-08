import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamid Ahmed Lakhan | AI/ML Engineer",
  description: "Personal portfolio of Hamid Ahmed Lakhan, AI / Machine Learning Engineer & Computer Vision Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#0a0a0a] text-zinc-50 selection:bg-cyan-500/30`}>
        {children}
      </body>
    </html>
  );
}

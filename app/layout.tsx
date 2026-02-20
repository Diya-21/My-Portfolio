import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divyajyoti Singh — AI & Data Science Engineer",
  description:
    "Portfolio of Divyajyoti Singh, a B.Tech AI & Data Science student building intelligent systems with Machine Learning, Generative AI, and Multi-Agent architectures.",
  keywords: [
    "Divyajyoti Singh",
    "AI Engineer",
    "Data Science",
    "Machine Learning",
    "Portfolio",
    "Generative AI",
  ],
  openGraph: {
    title: "Divyajyoti Singh — AI & Data Science Engineer",
    description:
      "Explore Divyajyoti Singh's portfolio of AI and Data Science projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MouseFollower } from "@/components/animations/MouseFollower";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanketh Ganji — Software Engineer",
  description:
    "Portfolio of Sanketh Ganji, a Software Engineer specializing in Angular, .NET, Flutter, and enterprise-grade full-stack development.",
  keywords: [
    "Sanketh Ganji",
    "Software Engineer",
    "Angular Developer",
    ".NET Developer",
    "Full Stack Developer",
    "Flutter Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sanketh Ganji" }],
  creator: "Sanketh Ganji",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sanketh Ganji — Software Engineer",
    description:
      "Portfolio of Sanketh Ganji, a Software Engineer specializing in Angular, .NET, Flutter, and enterprise-grade full-stack development.",
    siteName: "Sanketh Ganji Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanketh Ganji — Software Engineer",
    description:
      "Portfolio of Sanketh Ganji, a Software Engineer specializing in Angular, .NET, Flutter, and enterprise-grade full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="noise-overlay">
        <SmoothScroll>
          <MouseFollower />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

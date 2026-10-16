import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Carl Jasper Ramos — Aspiring Full Stack Developer",
    template: "%s | Carl Jasper Ramos",
  },
  description:
    "Portfolio of Carl Jasper Ramos, Computer Science student and aspiring full stack developer building modern web applications with Next.js, React, and cloud databases.",
  keywords: [
    "Carl Jasper Ramos",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Computer Science",
  ],
  authors: [{ name: "Carl Jasper Ramos" }],
  creator: "Carl Jasper Ramos",
  openGraph: {
    title: "Carl Jasper Ramos — Aspiring Full Stack Developer",
    description:
      "Computer Science student building modern full stack web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Carl Jasper Ramos",
  },
  twitter: {
    card: "summary",
    title: "Carl Jasper Ramos — Aspiring Full Stack Developer",
    description:
      "Computer Science student building modern full stack web applications.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#14171c" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Toaster />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

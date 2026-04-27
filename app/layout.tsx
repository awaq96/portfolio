import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import ThemeToggle from "./components/ui/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asher Waqar",
  description:
    "Software engineer specializing in distributed systems and performance engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0d0f1e" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fef9e7" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');var dark=t==='dark';document.documentElement.classList.add(dark?'dark':'light');})();` }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connect Prime Lounge Bar",
  description:
    "Experience the Prime Connection at Connect Prime Lounge Bar in North Macedonia. Explore our curated menu and call to order.",
  openGraph: {
    title: "Connect Prime Lounge Bar",
    description:
      "Experience the Prime Connection at Connect Prime Lounge Bar. Discover our premium selection of dishes and drinks.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect Prime Lounge Bar",
    description:
      "Experience the Prime Connection at Connect Prime Lounge Bar. Explore our elevated menu straight from your table.",
  },
  themeColor: "#0A0F51",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

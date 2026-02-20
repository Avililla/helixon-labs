import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DisclaimerBanner } from "@/components/layout/disclaimer-banner";
import { CookieBanner } from "@/components/layout/cookie-banner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Helixon Labs | Research Peptides & Chemical Reagents",
    template: "%s | Helixon Labs",
  },
  description:
    "Helixon Labs supplies synthetic peptides and chemical reagents exclusively for laboratory research purposes. Not for human or veterinary use.",
  keywords: [
    "research peptides",
    "chemical reagents",
    "laboratory supplies",
    "synthetic peptides",
    "research chemicals",
    "COA",
    "certificate of analysis",
    "HPLC",
    "mass spectrometry",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Helixon Labs",
    title: "Helixon Labs | Research Peptides & Chemical Reagents",
    description:
      "Supplier of synthetic peptides and chemical reagents for laboratory research. Products supplied strictly for research purposes.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <DisclaimerBanner />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LocalBusinessSchema, OrganizationSchema, WebsiteSchema } from "@/components/Schema";

export const metadata: Metadata = {
  metadataBase: new URL('https://arkiology.com'),
  title: {
    default: "Arkiology — Digital Infrastructure Agency | South Florida",
    template: "%s | Arkiology"
  },
  description: "We build the digital infrastructure that grows businesses. Custom websites, digital marketing, automations, and 24/7 AI employees. Based in South Florida, serving clients nationwide.",
  keywords: ["digital infrastructure", "website development", "AI employees", "marketing automation", "South Florida", "Miami", "web design", "custom websites"],
  authors: [{ name: "Arkiology" }],
  creator: "Arkiology",
  publisher: "Arkiology",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arkiology.com',
    siteName: 'Arkiology',
    title: 'Arkiology — Digital Infrastructure Agency',
    description: 'We build the digital infrastructure that grows businesses. Custom websites, digital marketing, automations, and 24/7 AI employees.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Arkiology - Digital Infrastructure Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arkiology — Digital Infrastructure Agency',
    description: 'We build the digital infrastructure that grows businesses. Custom websites, automations, and 24/7 AI employees.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

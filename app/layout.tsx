import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bhairava Studio | Modern Nepali Streetwear",
    template: "%s | Bhairava Studio"
  },
  description: "Experience the fusion of ancient Nepali heritage and modern streetwear. Bhairava Studio presents the 'Akash Bhairav' collection—premium, limited edition apparel.",
  keywords: ["Bhairava", "Nepali Streetwear", "Kathmandu Fashion", "Cultural Clothing", "Premium Streetwear", "Nepal", "Akash Bhairav"],
  authors: [{ name: "Sujal Gc", url: "https://bhairava.studio" }],
  creator: "Bhairava Studio",
  publisher: "Bhairava Studio",
  metadataBase: new URL('https://bhairava-studio.vercel.app'),
  openGraph: {
    title: "Bhairava Studio | Modern Nepali Streetwear",
    description: "Wear the Energy of Bhairava. Premium, culturally rooted streetwear inspired by the fierce deity of Kathmandu.",
    url: "https://bhairava-studio.vercel.app",
    siteName: "Bhairava Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhairava Studio Raglan Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhairava Studio | Modern Nepali Streetwear",
    description: "Wear the Energy of Bhairava. Limited Edition Drop Live.",
    creator: "@SujalGc99",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-void-black text-bone-white selection:bg-temple-gold selection:text-void-black`}
      >
        {children}
      </body>
    </html>
  );
}

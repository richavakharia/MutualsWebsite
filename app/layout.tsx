import type { Metadata } from "next";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"],
  style: ["normal","italic"],
});
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

export const metadata: Metadata = {
  title: "Mutuals, your world is waiting.",
  description: "The IRL social network built for Gen Z. Discover events, host experiences, and connect with your city.",
  openGraph: {
    title: "Mutuals, your world is waiting.",
    description: "The IRL social network built for Gen Z. Discover events, host experiences, and connect with your city.",
    url: "https://mutualssocial.com",
    siteName: "Mutuals",
    images: [
      {
        url: "/mutuals-logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutuals, your world is waiting.",
    description: "The IRL social network built for Gen Z. Discover events, host experiences, and connect with your city.",
    images: ["/mutuals-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${instrumentSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

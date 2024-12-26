import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import ChatWithUs from "@/components/chatWithUs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sagar-Films | Best Wedding Services in Kota",
  description:
    "Sagar-Films is your one-stop solution for premium wedding services in Kota. From candid photography to luxurious wedding planning, we make your big day truly special.",
  keywords: [
    "sagarfilms",
    "sagar films",
    "sagar films kota",
    "sagarfilms kota",
    "kota sagarfilms",
    "best wedding",
    "Kota best wedding",
    "wedding photography Kota",
    "wedding services",
    "Sagar-Films wedding site",
    "pre-wedding shoots Kota",
    "Kota wedding planner",
    "wedding photography packages",
    "destination wedding Kota",
    "luxury wedding services Kota",
    "budget-friendly wedding photography",
    "candid wedding photography",
    "traditional wedding shoots",
    "wedding videography Kota",
    "wedding planning services",
    "Kota wedding venues",
    "wedding decorations Kota",
    "Kota bridal photography",
    "couple photography in Kota",
  ],
  authors: [{ name: "Sagar-Films", url: "https://sagarfilms.in" }],
  openGraph: {
    title: "Sagar-Films | Best Wedding Services in Kota",
    description:
      "Sagar-Films specializes in premium wedding photography, videography, and planning services in Kota. Make your dream wedding unforgettable with us.",
    url: "https://sagarfilms.in",
    type: "website",
    images: [
      {
        url: "https://sagarfilms.in/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Sagar-Films - Best Wedding Services in Kota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Sagarfilms",
    title: "Sagar-Films | Best Wedding Services in Kota",
    description:
      "Discover Sagar-Films, offering premium wedding photography and planning services in Kota. Let us make your wedding day truly unforgettable.",
    images: [
      {
        url: "https://sagarfilms.in/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Sagar-Films - Best Wedding Services in Kota",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sagarfilms.in",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://sagarfilms.in" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <ChatWithUs />
        {children}
      </body>
    </html>
  );
}

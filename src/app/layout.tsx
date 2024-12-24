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
  description: "Discover the best wedding services in Kota with Sagar-Films. From pre-wedding shoots to complete wedding coverage, we make your special day memorable.",
  keywords: [
    "best wedding",
    "Kota best wedding",
    "wedding photography Kota",
    "wedding services",
    "Sagar-Films wedding site",
    "pre-wedding shoots Kota",
    "Kota wedding planner",
  ],
  authors: [
    { name: "Sagar-Films", url: "https://sagarfilms.in" },
  ],
   openGraph: {
    title: "Sagar-Films | Best Wedding Services in Kota",
    description:
      "Sagar-Films specializes in providing top-notch wedding photography and services in Kota. Book us to make your wedding unforgettable.",
    url: "https://sagarfilms.in",
    type: "website",
    // images: [
    //   {
    //     url: "https://sagar-films.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Best Wedding Services in Kota",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Sagarfilms",
    title: "Sagar-Films | Best Wedding Services in Kota",
    description:
      "Sagar-Films offers premium wedding services, including photography, videography, and planning, tailored for the best experience in Kota.",
    // images: [
    //   {
    //     url: "https://sagar-films.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Best Wedding Services in Kota",
    //   },
    // ],
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
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

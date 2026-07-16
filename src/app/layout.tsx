import type { Metadata, Viewport } from "next";
import { Fraunces, Newsreader, Spline_Sans_Mono } from "next/font/google";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_AUTHOR,
  SITE_GITHUB,
  SITE_OG_IMAGE,
} from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-mono",
});

const OG_IMAGE = {
  url: SITE_OG_IMAGE,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: `${SITE_NAME} — visual notes`,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_AUTHOR, url: SITE_GITHUB }],
  creator: SITE_AUTHOR,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f2e9" },
    { media: "(prefers-color-scheme: dark)", color: "#16130f" },
  ],
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${newsreader.variable} ${splineMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

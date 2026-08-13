import {
  Bricolage_Grotesque,
  Newsreader,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vikram-site-five.vercel.app"),
  title: "Vikram Iyer — Product, UX & Marketing",
  description:
    "Vikram Iyer is a UCLA cognitive science student working across product design, UX research, and marketing. Case studies in web redesign, competitive analysis, and campaign strategy.",
  authors: [{ name: "Vikram Iyer" }],
  openGraph: {
    type: "website",
    siteName: "Vikram Iyer",
    title: "Vikram Iyer — Product, UX & Marketing",
    description:
      "UCLA cognitive science student working across product design, UX research, and marketing.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vikram Iyer — product, UX, and marketing portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikram Iyer — Product, UX & Marketing",
    description:
      "UCLA cognitive science student working across product design, UX research, and marketing.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
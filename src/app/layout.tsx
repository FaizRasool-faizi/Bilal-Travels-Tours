import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export const viewport: Viewport = {
  themeColor: "#102D4F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bilaltravels.pk"),
  title: {
    template: "%s | Bilal Travels & Tours",
    default: "Bilal Travels & Tours — Pakistan's Trusted Partner for International Travel",
  },
  description:
    "Curating premium international holiday packages, reliable visa consultancy, and sacred Umrah journeys with personal guidance and unmatched reliability.",
  keywords: [
    "Bilal Travels & Tours",
    "Pakistan Travel Agency",
    "International Tours Pakistan",
    "Umrah Packages",
    "Visa Consultancy",
    "Istanbul Tour",
    "Dubai Packages",
  ],
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: "Bilal Travels & Tours — Your Next Chapter, Beyond Borders",
    description:
      "Discover the world with trusted guidance, seamless services and unforgettable journeys — from iconic destinations to sacred journeys.",
    url: "https://bilaltravels.pk",
    siteName: "Bilal Travels & Tours",
    images: [
      {
        url: "/brand/logo.png",
        width: 800,
        height: 600,
        alt: "Bilal Travels & Tours Official Identity",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-ivory-100 text-charcoal-900 selection:bg-navy-900 selection:text-ivory-100 antialiased">
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}

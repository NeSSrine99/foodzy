// app/layout.js

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const inter = Inter({
  weight: "800",
  subsets: ["cyrillic"],
  variable: "--font-Inter",
});

export const metadata = {
  metadataBase: new URL("https://foodzy.vercel.app "),
  title: "Foodzy | Fresh Vegetables & Fruits Online Delivery",
  description:
    "Buy fresh vegetables and fruits online at Foodzy. Fast delivery, organic produce, and daily grocery needs delivered to your door.",
  keywords: [
    "fresh vegetables",
    "organic fruits",
    "online grocery shopping",
    "vegetables delivery",
    "fruits delivery",
    "buy groceries online",
    "healthy food delivery",
  ],
  authors: [{ name: "Noura Ahmed", url: "https://foodzy.vercel.app " }],
  openGraph: {
    title: "Foodzy | Fresh Vegetables & Fruits Online Delivery",
    description:
      "Buy fresh vegetables and fruits online at Foodzy. Fast delivery, organic produce, and daily grocery needs delivered to your door.",
    url: "https://foodzy.vercel.app ",
    siteName: "Foodzy",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fresh Vegetables and Fruits on Table",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html>
        <head>
          {/* Favicon from favicon.io */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className={`${poppins.variable} ${inter.variable} antialiased`}>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}

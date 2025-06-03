import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import Section1Home from "@/components/Section1Home";
import Section2Home from "@/components/Section2Home";

export async function generateMetadata() {
  return {
    title: "Buy Fresh Vegetables & Fruits Online | Foodzy",
    description:
      "Order fresh vegetables and organic fruits online with fast delivery. Foodzy offers healthy, farm-fresh produce at your doorstep.",
    keywords: [
      "buy vegetables online",
      "fresh fruits delivery",
      "organic grocery shopping",
      "vegetables delivery service",
      "online fruit shop",
      "healthy food delivery",
    ],
    openGraph: {
      title: "Buy Fresh Vegetables & Fruits Online | Foodzy",
      description:
        "Order fresh vegetables and organic fruits online with fast delivery. Foodzy offers healthy, farm-fresh produce at your doorstep.",
      url: "https://foodzy.vercel.app ",
      siteName: "Foodzy",
      images: [
        {
          url: "/og-image-home.jpg",
          width: 1200,
          height: 630,
          alt: "Fresh Vegetables and Fruits for Sale Online",
        },
      ],
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Home() {
  return (
    <main>
      <Banner />
      <Section1Home />
      <Section2Home />
    </main>
  );
}

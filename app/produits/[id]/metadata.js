import { Products } from "@/data/products";

export async function generateMetadata({ params }) {
  const { id } = params;
  const productId = parseInt(id);
  const product = Products.find((p) => p.id === productId);

  if (!product) {
    return {
      title: "Product - Foodzy",
      description: "The product you are looking for is not available.",
    };
  }
  console.log("show products", product);

  return {
    title: `${product.name} - Foodzy`,
    description:
      product.desc || `Buy ${product.name} for only ${product.price} $`,
    openGraph: {
      title: product.name,
      description: product.desc || `Buy ${product.name} online now`,
      images: [
        {
          url: product.image.startsWith("http")
            ? product.image
            : `https://yourdomain.com${product.image}`,
          alt: product.name,
        },
      ],
    },
  };
}

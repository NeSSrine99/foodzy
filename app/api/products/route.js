const Products = [
  {
    id: 1,
    image: "/images/product1.png",
    name: "Fresh organic villa farm lemon 500gm pack",
    price: "28.85",
  },
  {
    id: 2,
    image: "/images/product2.png",
    name: "Organic strawberries 1kg",
    price: "12.99",
  },
  {
    id: 3,
    image: "/images/product3.png",
    name: "Crispy green apples 6 pieces",
    price: "8.49",
  },
  {
    id: 4,
    image: "/images/product4.png",
    name: "Red tomatoes fresh 1kg",
    price: "5.99",
  },
  {
    id: 5,
    image: "/images/product5.png",
    name: "Organic carrots 1kg",
    price: "4.99",
  },
  {
    id: 6,
    image: "/images/product6.png",
    name: "Avocado mexican 2 pieces",
    price: "7.99",
  },
  {
    id: 7,
    image: "/images/product7.png",
    name: "Banana natural ripe 6 pieces",
    price: "6.49",
  },
  {
    id: 8,
    image: "/images/product8.png",
    name: "Organic broccoli 1kg",
    price: "9.99",
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(Products), { status: 200 });
}

import type { Product } from "./Types";

export const products: Product[] = [
  {
    id: 1,
    title: "Purple Shamrey Shirt",
    price: 850,
    image: [
      "https://img.drz.lazcdn.com/static/pk/p/0bf0c4b96f653f315a78c1f0db357e2a.png_2200x2200q80.png_.webp",
      "https://img.drz.lazcdn.com/static/pk/p/0bf0c4b96f653f315a78c1f0db357e2a.png_2200x2200q80.png_.webp",
      "https://img.drz.lazcdn.com/static/pk/p/0bf0c4b96f653f315a78c1f0db357e2a.png_2200x2200q80.png_.webp",
      "https://img.drz.lazcdn.com/static/pk/p/0bf0c4b96f653f315a78c1f0db357e2a.png_2200x2200q80.png_.webp",
    ],
    category: "Shirts",
    description:
      "Purple Shamrey Fabric Shirt - Premium Quality, Comfortable & Versatile for Men",
    stock: { XS: 5, S: 12, M: 8, L: 15, XL: 6, XXL: 3 },
  },
  {
    id: 2,
    title: "Slim Fit Chinos",
    price: 79.99,
    image: [
      "https://img.drz.lazcdn.com/static/pk/p/0bf0c4b96f653f315a78c1f0db357e2a.png_2200x2200q80.png_.webp", // Image 1
      "https://example.com/image2.webp", // Image 2
      "https://example.com/image3.webp", // Image 3
      "https://example.com/image4.webp", // Image 4
    ],
    category: "Pants",
    description: "Comfortable chino pants with slim fit and stretch fabric",
    stock: { XS: 0, S: 8, M: 12, L: 10, XL: 4, XXL: 2 },
  },

  {
    id: 3,
    title: "Wool Dress Trousers",
    price: 149.99,
    image: [
      "https://img.drz.lazcdn.com/static/pk/p/0bf0c4b96f653f315a78c1f0db357e2a.png_2200x2200q80.png_.webp",
      "https://img.drz.lazcdn.com/static/pk/p/0bf0c4b96f653f315a78c1f0db357e2a.png_2200x2200q80.png_.webp",
      "https://img.drz.lazcdn.com/static/pk/p/0bf0c4b96f653f315a78c1f0db357e2a.png_2200x2200q80.png_.webp",
      "https://img.drz.lazcdn.com/static/pk/p/0bf0c4b96f653f315a78c1f0db357e2a.png_2200x2200q80.png_.webp",
    ],
    category: "Trousers",
    description: "Premium wool trousers perfect for formal occasions",
    stock: { XS: 3, S: 7, M: 0, L: 9, XL: 5, XXL: 1 },
  },
  // {
  //   id: 4,
  //   title: "Premium Cotton T-Shirt",
  //   price: 39.99,
  //   image: "/placeholder.svg?height=500&width=400&text=Premium+Cotton+Tshirt",
  //   category: "T-shirts",
  //   description: "Soft cotton t-shirt with perfect fit and premium quality",
  //   stock: { XS: 15, S: 20, M: 18, L: 22, XL: 12, XXL: 8 },
  // },
  // {
  //   id: 5,
  //   title: "Casual Denim Shirt",
  //   price: 69.99,
  //   image: "/placeholder.svg?height=500&width=400&text=Casual+Denim+Shirt",
  //   category: "Shirts",
  //   description: "Classic denim shirt with modern cut and vintage wash",
  //   stock: { XS: 4, S: 9, M: 11, L: 7, XL: 0, XXL: 2 },
  // },
  // {
  //   id: 6,
  //   title: "Cargo Pants",
  //   price: 99.99,
  //   image: "/placeholder.svg?height=500&width=400&text=Cargo+Pants",
  //   category: "Pants",
  //   description:
  //     "Functional cargo pants with multiple pockets and durable fabric",
  //   stock: { XS: 2, S: 6, M: 14, L: 16, XL: 8, XXL: 4 },
  // },
  // {
  //   id: 7,
  //   title: "Formal Black Trousers",
  //   price: 129.99,
  //   image: "/placeholder.svg?height=500&width=400&text=Formal+Black+Trousers",
  //   category: "Trousers",
  //   description: "Elegant black trousers for business and formal events",
  //   stock: { XS: 1, S: 5, M: 9, L: 12, XL: 6, XXL: 0 },
  // },
  // {
  //   id: 8,
  //   title: "Graphic Print T-Shirt",
  //   price: 49.99,
  //   image: "/placeholder.svg?height=500&width=400&text=Graphic+Print+Tshirt",
  //   category: "T-shirts",
  //   description:
  //     "Trendy graphic t-shirt with unique design and comfortable fit",
  //   stock: { XS: 8, S: 14, M: 16, L: 19, XL: 11, XXL: 5 },
  // },
  // {
  //   id: 9,
  //   title: "Linen Summer Shirt",
  //   price: 79.99,
  //   image: "/placeholder.svg?height=500&width=400&text=Linen+Summer+Shirt",
  //   category: "Shirts",
  //   description: "Breathable linen shirt perfect for summer occasions",
  //   stock: { XS: 6, S: 10, M: 0, L: 8, XL: 4, XXL: 1 },
  // },
  // {
  //   id: 10,
  //   title: "Jogger Pants",
  //   price: 59.99,
  //   image: "/placeholder.svg?height=500&width=400&text=Jogger+Pants",
  //   category: "Pants",
  //   description: "Comfortable jogger pants for casual wear and workouts",
  //   stock: { XS: 12, S: 18, M: 20, L: 15, XL: 9, XXL: 6 },
  // },
  // {
  //   id: 11,
  //   title: "Pinstripe Trousers",
  //   price: 159.99,
  //   image: "/placeholder.svg?height=500&width=400&text=Pinstripe+Trousers",
  //   category: "Trousers",
  //   description: "Classic pinstripe trousers for professional styling",
  //   stock: { XS: 0, S: 3, M: 7, L: 10, XL: 5, XXL: 2 },
  // },
  // {
  //   id: 12,
  //   title: "V-Neck T-Shirt",
  //   price: 34.99,
  //   image: "/placeholder.svg?height=500&width=400&text=V+Neck+Tshirt",
  //   category: "T-shirts",
  //   description: "Classic v-neck t-shirt with soft cotton blend fabric",
  //   stock: { XS: 10, S: 16, M: 14, L: 18, XL: 7, XXL: 0 },
  // },
];

export const categories = ["All", "Shirts", "Pants", "Trousers", "T-shirts"];

import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Men's Collection | Shani Store",
  description:
    "Browse our complete collection of premium men's clothing. Shop shirts, pants, trousers, and t-shirts with filtering options and detailed product views.",
  keywords: [
    "men's fashion",
    "clothing shop",
    "shirts",
    "pants",
    "trousers",
    "t-shirts",
    "premium menswear",
  ],
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

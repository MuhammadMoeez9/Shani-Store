import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/Context/Cart-Context";
import { AuthProvider } from "@/Context/Auth-Context";
// import { AdminProvider } from "@/contexts/admin-context";
import CartSidebar from "@/Component/Cart-Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HAMMAD GARMENTS - Premium Fashion Store | Redefine Your Style",
  description:
    "Discover exclusive fashion pieces that blend contemporary design with timeless elegance. Shop premium clothing, accessories, and sustainable fashion at LUXE.",
  keywords: [
    "fashion",
    "clothing",
    "premium",
    "luxury",
    "style",
    "sustainable fashion",
    "designer clothes",
  ],
  authors: [{ name: "LUXE Fashion" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "LUXE - Premium Fashion Store",
    description:
      "Redefine your style with our exclusive collection of premium fashion pieces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* <AdminProvider> */}
          <CartProvider>
            {children}
            <CartSidebar />
          </CartProvider>
          {/* </AdminProvider> */}
        </AuthProvider>
      </body>
    </html>
  );
}

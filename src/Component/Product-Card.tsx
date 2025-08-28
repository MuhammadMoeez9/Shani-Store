"use client";

import type React from "react";

import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/Context/Cart-Context";
import type { Product } from "@/Lib/Types";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({
      type: "ADD_ITEM",
      payload: {
        ...product,
        quantity: 1,
        size: "M", // Default size for quick add
      },
    });

    dispatch({ type: "OPEN_CART" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link href={`/Product/${product.id}`}>
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image?.[0] || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

          {/* Action buttons */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
              aria-label="Add to wishlist"
            >
              <Heart size={18} className="text-gray-700" />
            </motion.button>
          </div>

          {/* Quick add to cart button */}
          <motion.button
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-4 right-4 bg-black text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-800"
          >
            <ShoppingBag size={18} />
            <span>Quick Add</span>
          </motion.button>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-sm text-gray-500 font-medium">
              {product.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              PKR {product.price}
            </span>
            <span className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
              Quick View
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

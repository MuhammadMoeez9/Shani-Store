"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Package,
} from "lucide-react";
import { useCart } from "@/Context/Cart-Context";
import type { Product } from "@/Lib/Types";
import Image from "next/image";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedColor, setSelectedColor] = useState("Black"); // kept for future use
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  // ✅ Safe normalization
  const images = Array.isArray(product.image) ? product.image : [product.image];

  const features = [
    { icon: Truck, text: "Free shipping on orders over 5000" },
    { icon: RotateCcw, text: "30-day return policy" },
    { icon: Shield, text: "2-year warranty included" },
  ];

  const getStockStatus = (size: string) => {
    const stock = product.stock[size as keyof typeof product.stock];
    if (stock === 0)
      return { status: "out", text: "Out of Stock", color: "text-red-600" };
    if (stock <= 3)
      return {
        status: "low",
        text: `Only ${stock} left`,
        color: "text-orange-600",
      };
    return { status: "in", text: "In Stock", color: "text-green-600" };
  };

  const selectedSizeStock = selectedSize
    ? product.stock[selectedSize as keyof typeof product.stock]
    : 0;
  const maxQuantity = selectedSize ? Math.min(selectedSizeStock, 10) : 1;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    if (selectedSizeStock === 0) {
      alert("This size is out of stock");
      return;
    }

    if (quantity > selectedSizeStock) {
      alert(`Only ${selectedSizeStock} items available in this size`);
      return;
    }

    dispatch({
      type: "ADD_ITEM",
      payload: {
        ...product,
        quantity,
        size: selectedSize,
        color: selectedColor,
      },
    });

    dispatch({ type: "OPEN_CART" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-square rounded-2xl overflow-hidden bg-gray-100 relative"
          >
            <Image
              src={images[activeImage] ?? "/placeholder.svg"}
              alt={product?.title ?? "Product Image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {images?.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all relative ${
                  activeImage === index
                    ? "border-black"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <p className="text-sm text-gray-500 font-medium mb-2">
              {product.category}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  (128 reviews)
                </span>
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">
              PKR {product.price.toFixed(2)}
            </p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Size Selection with Stock */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Size</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {sizes.map((size) => {
                const stockInfo = getStockStatus(size);
                const isOutOfStock = stockInfo.status === "out";
                const isSelected = selectedSize === size;

                return (
                  <div key={size} className="relative">
                    <button
                      onClick={() => !isOutOfStock && setSelectedSize(size)}
                      disabled={isOutOfStock}
                      className={`w-full py-3 px-2 border rounded-lg font-semibold transition-all text-sm ${
                        isSelected
                          ? "border-black bg-black text-white"
                          : isOutOfStock
                          ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stock Overview */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Package size={20} className="text-gray-600" />
              <h4 className="font-semibold text-gray-900">
                Stock Availability
              </h4>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-xs">
              {sizes.map((size) => {
                const stock = product.stock[size as keyof typeof product.stock];
                const stockInfo = getStockStatus(size);
                return (
                  <div key={size} className="text-center">
                    <div className="font-medium text-gray-700">{size}</div>
                    <div className={stockInfo.color}>{stock}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quantity</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 py-3 font-semibold min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(maxQuantity, quantity + 1))
                  }
                  disabled={quantity >= maxQuantity}
                  className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              {selectedSize && (
                <span className="text-sm text-gray-500">
                  Max: {maxQuantity}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: selectedSizeStock > 0 ? 1.02 : 1 }}
              whileTap={{ scale: selectedSizeStock > 0 ? 0.98 : 1 }}
              onClick={handleAddToCart}
              disabled={!selectedSize || selectedSizeStock === 0}
              className={`w-full py-4 rounded-full font-semibold text-lg transition-colors ${
                !selectedSize || selectedSizeStock === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {!selectedSize
                ? "Select Size"
                : selectedSizeStock === 0
                ? "Out of Stock"
                : `Add to Cart - PKR ${(product.price * quantity).toFixed(2)}`}
            </motion.button>

            <div className="flex space-x-4">
              <button className="flex-1 border border-gray-300 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <Heart size={20} />
                <span>Add to Wishlist</span>
              </button>
              <button className="flex-1 border border-gray-300 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="border-t pt-6">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon size={20} className="text-green-600" />
                  <span className="text-gray-600">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

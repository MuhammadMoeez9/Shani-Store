"use client";

import { motion } from "framer-motion";
import { categories } from "@/Lib/Products";

interface ProductFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  productCount: number;
}

export default function ProductFilter({
  selectedCategory,
  onCategoryChange,
  productCount,
}: ProductFilterProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Filter Title */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Shop Men's Collection
          </h2>
          <p className="text-gray-600">
            {productCount} {productCount === 1 ? "product" : "products"} found
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

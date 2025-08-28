"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl font-bold text-yellow-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Sorry, the product you're looking for doesn't exist or has been
            moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
              >
                <Home size={20} />
                <span>Go Home</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                // onClick={() => window.history.back()}
                className="inline-flex items-center space-x-2 border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Go Back</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Navbar from "@/Component/Navbar";
// import Footer from "@/components/footer";
import { Target, Eye, Zap } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To democratize high-end fashion by making premium quality clothing accessible to everyone, everywhere.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become the world's most trusted fashion brand, known for quality, sustainability, and innovation.",
    },
    {
      icon: Zap,
      title: "Our Values",
      description:
        "Integrity, creativity, sustainability, and customer-centricity guide everything we do.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      image: "/placeholder.svg?height=400&width=400&text=Sarah+Johnson",
      bio: "With 20+ years in fashion, Sarah founded LUXE to bridge the gap between luxury and accessibility.",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "/placeholder.svg?height=400&width=400&text=Michael+Chen",
      bio: "Michael brings innovative design thinking from his experience at top fashion houses in Milan and Paris.",
    },
    {
      name: "Emma Rodriguez",
      role: "Sustainability Director",
      image: "/placeholder.svg?height=400&width=400&text=Emma+Rodriguez",
      bio: "Emma leads our commitment to ethical fashion and environmental responsibility.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "1000+", label: "Premium Items" },
    { number: "25+", label: "Countries Served" },
    { number: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/placeholder.svg?height=800&width=1600&text=Fashion+Team+Working"
            alt="Fashion team working"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-yellow-500">Shani Store</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional fashion experiences since 2009. We're more
              than a brand – we're a movement towards accessible luxury and
              sustainable style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500 text-black rounded-2xl mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Shani was born from a simple observation: high-quality fashion
                  shouldn't be exclusive to the few. In 2009, our founder Sarah
                  Johnson opened the first Shani boutique in SoHo, New York, with
                  a vision to make premium fashion accessible to everyone.
                </p>
                <p>
                  What started as a 500-square-foot store has evolved into a
                  global fashion destination, serving customers in over 25
                  countries. Our growth has been driven by an unwavering
                  commitment to quality, innovation, and customer satisfaction.
                </p>
                <p>
                  Today, we continue to push boundaries in fashion design while
                  maintaining our core values of accessibility, sustainability,
                  and exceptional craftsmanship. Every piece in our collection
                  tells a story of passion, dedication, and the pursuit of
                  sartorial excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/placeholder.svg?height=600&width=800&text=LUXE+Store+Interior"
                alt="LUXE store interior"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}

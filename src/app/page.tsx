import Image from "next/image";
import Navbar from "../Component/Navbar";
import Hero from "@/Component/Hero";
import ProductGrid from "@/Component/Product-Grid";
import AboutPage from "@/Component/About";
import Footer from "@/Component/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid />
      <AboutPage />
      <Footer />
    </main>
  );
}

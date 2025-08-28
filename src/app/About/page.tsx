import Image from "next/image";
import Navbar from "@/Component/Navbar";
import AboutPage from "@/Component/About";
import Footer from "@/Component/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutPage />
      <Footer />
    </main>
  );
}

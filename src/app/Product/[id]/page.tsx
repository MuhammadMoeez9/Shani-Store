import { notFound } from "next/navigation";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";
import ProductDetail from "@/Component/Product-Detail";
import { products } from "@/Lib/Products";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ProductDetail product={product} />
      </div>
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

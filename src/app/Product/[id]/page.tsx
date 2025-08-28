import { notFound } from "next/navigation";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";
import ProductDetail from "@/Component/Product-Detail";
import { products } from "@/Lib/Products";

// ✅ No custom interface needed, just inline typing
export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id));

  if (!product) {
    return notFound(); // must return here
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

// ✅ generateStaticParams typing
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

import { notFound } from "next/navigation";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";
import ProductDetail from "@/Component/Product-Detail";
import { products } from "@/Lib/Products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
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

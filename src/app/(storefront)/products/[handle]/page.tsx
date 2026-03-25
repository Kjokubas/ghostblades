import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductByHandle } from "@/data/products";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { PageTransition } from "@/components/shared/page-transition";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  return (
    <PageTransition>
      <section className="px-4 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ProductGallery images={product.images} title={product.title} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollectionByHandle } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductGrid } from "@/components/product/product-grid";
import { PageTransition } from "@/components/shared/page-transition";

interface CollectionPageProps {
  params: Promise<{ handle: string }>;
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);
  if (!collection) return { title: "Collection Not Found" };

  return {
    title: collection.title,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);
  if (!collection) notFound();

  const products = getProductsByCollection(
    handle as "katana" | "wakizashi" | "tanto"
  );

  return (
    <PageTransition>
      <section className="px-4 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title={collection.title}
            subtitle={collection.description}

          />
          <ProductGrid products={products} />
        </div>
      </section>
    </PageTransition>
  );
}

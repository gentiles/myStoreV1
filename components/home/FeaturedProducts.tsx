import { fetchFeaturesProducts } from "@/utils/action";
import React from "react";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

async function FeaturedProducts() {
  const products = await fetchFeaturesProducts();
  if (products.length === 0) {
    return <EmptyList />;
  }

  return (
    <div>
      <section className="pt-4">
        <SectionTitle text="Featured Products" />
        <ProductsGrid products={products} />
      </section>
    </div>
  );
}

export default FeaturedProducts;

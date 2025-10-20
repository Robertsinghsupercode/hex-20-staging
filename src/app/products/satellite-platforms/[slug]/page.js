import { sateliteProducts } from "../sateliteProduct";
import Banner from "./components/Banner";
import CtaBlock from "@/app/components/CtaBlock";
import ProductDetails from "./components/ProductDetails";
import RelatedMissions from "./components/RelatedMissions";

export async function generateStaticParams() {
  return sateliteProducts.map((product) => ({
    slug: product.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = sateliteProducts.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* <Banner product={product} /> */}
      <ProductDetails product={product} />
      <RelatedMissions currentProductId={product.id} />
      <CtaBlock />
    </div>
  );
}
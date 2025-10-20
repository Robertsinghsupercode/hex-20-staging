import CtaBlock from "@/app/components/CtaBlock";
import { subsystemProducts } from "../subsystemProducts";
import Banner from "./components/Banner";
import Content from "./components/Content";
import RelatedMissions from "./components/RelatedMissions"


export async function generateStaticParams() {
  return subsystemProducts.map((product) => ({
    slug: product.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = subsystemProducts.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Banner product={product} />
      <Content product={product} />
      <RelatedMissions currentProductId={product.id} />
      <CtaBlock />
    </div>
  );
}
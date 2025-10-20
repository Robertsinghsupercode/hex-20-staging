"use client";
import React, { useState, useEffect } from "react";
import CtaBtn from "@/app/components/CtaBtn";
import { subsystemProducts } from "../../subsystemProducts";
import Styles from "../.././../products/satellite-platforms/[slug]/css/related.module.css";

export default function RandomProducts({ currentProductId }) {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const getRandomTwoProducts = () => {
      const filteredProducts = subsystemProducts.filter(
        (product) => product.id !== currentProductId
      );
      const shuffled = [...filteredProducts].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 2);
    };

    setRandomProducts(getRandomTwoProducts());
  }, [currentProductId]);

  return (
    <section className={`${Styles.relatedSec}`}>
      <div className="container-main">
        <p className={`${Styles.relatedHeading} heading-1 heading-2-sm`}>
          Related products
        </p>
        <div className={Styles.productContainer}>
          {randomProducts.map((product) => (
            <div 
              key={product.id} 
              className={`${Styles.productCard} ${Styles.productCardTwo}`}
            >
              <div>
                <img
                  src={product.image}
                  alt={product.alt}
                  width={product.width}
                  height={product.height}
                />
              </div>
              <div className={`${Styles.relatedBoxContent} ${Styles.relatedBoxContentTwo}`}>
                <div className="flex flex-column gap-10">
                  <h2 className="heading-3 heading-3-sm">{product.innerPage.bannerTitle}</h2>
                  {/* <p className="text-1 opcty-5 text-1-sm">{product.description}</p> */}
                </div>
                <CtaBtn
                  href={`/subsystems/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                  text="Learn more"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
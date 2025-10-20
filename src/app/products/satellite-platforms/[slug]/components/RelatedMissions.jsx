"use client";
import React, { useState, useEffect } from "react";
import CtaBtn from "@/app/components/CtaBtn";
import { sateliteProducts } from "../../sateliteProduct";
import Styles from "../css/related.module.css";

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function RandomProducts({ currentProductId }) {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const getRandomTwoProducts = () => {
      // Filter out the current product
      const filteredProducts = sateliteProducts.filter(
        (product) => product.id !== currentProductId
      );

      // Shuffle randomly
      const shuffled = shuffleArray(filteredProducts);

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
            <div key={product.id} className={Styles.productCard}>
              <div>
                <img
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width}
                  height={product.image.height}
                />
              </div>
              <div className={`${Styles.relatedBoxContent}`}>
                <div className="flex flex-column gap-10">
                  <h2 className="heading-3 heading-3-sm">{product.name}</h2>
                  <p className="text-1 text-1-sm opcty-5">{product.description}</p>
                </div>
                <CtaBtn
                  href={`/products/satellite-platforms/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
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
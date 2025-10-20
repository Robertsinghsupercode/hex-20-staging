"use client"
import React, { useState } from 'react';
import Styles from '../css/productdetails.module.css'
import Banner from "./Banner";
import useFloatingImages from "@/app/components/useFloatingImg"

const ProductDetails = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) return <p>Product not found.</p>;

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const activeType = product.types[activeIndex];
  useFloatingImages();
  return (
    <>
      <Banner product={product} activeType={activeType} />
      <section className={Styles.ProductDetailsSec}>
      <div className='container-main'>
        <div className={`${Styles.ProductDetailsContent}`}>
          {product.types.length > 1 && (
            // tab header 
            <div className={`${Styles.tabHeader}`}>
              {product.types.map((type, index) => (
                <div
                  key={index}
                  type="button" 
                  onClick={() => handleTabClick(index)}
                  className={index === activeIndex ? Styles.activeTab : ''}
                >
                    <span className={`${Styles.tabHeadContent} heading-6 heading-1-sm`}>
                        {type.name}
                    </span>
                </div>
              ))}
            </div>
          )}
          {/* tab content  */}
          <div className={`${Styles.tabContent}`}>  
            <div className='mobileHide'>
                <img 
                src={activeType.image.src} 
                alt={activeType.image.alt} 
                width={activeType.image.width} 
                height={activeType.image.height} 
                className='floating-img'
                />
            </div>

            <div>
                <p className={`${Styles.tabTag} text-3 text-2-sm opcty-5 sentence-case`}>{activeType.tag}</p>
                <p className={`${Styles.tabDescription} text-1 text-1-sm`}>{activeType.description}</p>
                <ul className={`${Styles.tabUl} flex flex-column`}>
                  {activeType.specifications.map((spec, i) => (
                    <li key={i} className={`${Styles.tabLi} flex gap-20`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                        <path d="M19 0.5L24 5.99997L19 11.5" stroke="#090909"/>
                        <path opacity="0.3" d="M9 0.5L14 5.99997L9 11.5" stroke="#090909"/>
                        <path opacity="0.1" d="M1 0.5L6 5.99997L1 11.5" stroke="#090909"/>
                      </svg>

                      <div className="text-3 text-2-sm flex flex-column gap-1 sentence-case">
                        <p>{spec.text}</p>
                        
                        {spec.highlight && <span className={`${Styles.highlight} sentence-case`}>{spec.highlight}</span>}

                        {spec.highlights && (
                          <ul className={Styles.nestedUl}>
                            {spec.highlights.map((h, idx) => (
                              <li key={idx} className={Styles.nestedLi} style={{paddingBottom:"5px"}}>
                                {h.text}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
            </div>
            
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ProductDetails;
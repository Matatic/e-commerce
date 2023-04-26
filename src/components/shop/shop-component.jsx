import React, { useContext,useEffect } from "react";
import { ProductContext } from "../../contexts/product.contex";
import Product from "../ProductCard/product.component";
import "./shop-styles.sass";

const ShopComponent = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      {Object.keys(products).slice(7,19).map(title => (
        <>
          <h1>{title}</h1>
          <div className="products-container">
          {products[title].map(product => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default ShopComponent;

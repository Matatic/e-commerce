import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/product.contex";
import Product from "../ProductCard/product.component";
import "./shop-styles.sass";
import CategoryPreview from "../category-preview/category-preview.component";

const ShopComponent = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="shop-container">
      {Object.keys(products)
        .slice(7, 19)
        .map(title => {
          const product = products[title];
          return (
            <CategoryPreview key={title} title={title} products={product} />
          );
        })}
    </div>
  );
};

export default ShopComponent;

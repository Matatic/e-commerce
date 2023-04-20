import React, { useContext } from "react";
import { ProductContext } from "../../contexts/product.contex";
import Product from "../ProductCard/product.component";
import "./shop-styles.sass";

const ShopComponent = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
};

export default ShopComponent;

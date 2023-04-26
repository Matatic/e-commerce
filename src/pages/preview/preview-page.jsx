import React, { useContext } from "react";
import { ProductContext } from "../../contexts/product.contex";
import { useParams } from "react-router-dom";
import Product from "../../components/ProductCard/product.component";
import HeaderComponent from "../../components/Header/Header-component";
const PreviewPage = () => {
  const { title } = useParams();
  const { products } = useContext(ProductContext);
  return (
    <>
      <HeaderComponent />
      <h2>{title}</h2>
      <div className="preview">
        {products &&
          products[title].map(product => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default PreviewPage;

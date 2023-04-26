import React from "react";
import Product from "../ProductCard/product.component";
import "./category-preview.style.sass";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map(product => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;

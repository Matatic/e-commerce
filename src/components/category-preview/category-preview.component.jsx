import React from "react";
import Product from "../ProductCard/product.component";
import "./category-preview.style.sass";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const handleNavigate = title => {
    navigate(`${title}`);
  };
  return (
    <div className="category-preview-container">
      <h2>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => handleNavigate(title)}
        >
          {title.toUpperCase()}
        </span>
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

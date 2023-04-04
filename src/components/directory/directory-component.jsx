import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./directory-style.sass";

const Directory = ({ categories }) => {
  const { title, imageUrl, id } = categories;
  const navigate = useNavigate();
  return (
    <>
      <div className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default Directory;

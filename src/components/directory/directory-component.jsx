import React from "react";
import {
  BackgroudImage,
  CategoryBody,
  CategoryContainer,
} from "./directory-style";
import { useNavigate } from "react-router-dom";

const Directory = ({ categories }) => {
  const { title, imageUrl, route } = categories;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(route);
  };
  return (
    <>
      <CategoryContainer onClick={handleNavigate}>
        <BackgroudImage imageUrl={imageUrl} />
        <CategoryBody>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </CategoryBody>
      </CategoryContainer>
    </>
  );
};

export default Directory;

import React from "react";
import {
  BackgroudImage,
  CategoryBody,
  CategoryContainer,
} from "./directory-style";

const Directory = ({ categories }) => {
  const { title, imageUrl, id } = categories;
  return (
    <>
      <CategoryContainer>
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

import React, { createContext, useState, useEffect } from "react";
import { getCategoriesAdnDocuments } from "../utils/firebase/firebase-utils.jsx";

export const ProductContext = createContext({
  products: {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAdnDocuments();
      console.log("categories", categoryMap);
      setProducts(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

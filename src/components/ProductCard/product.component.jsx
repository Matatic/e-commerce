import React, { useContext } from "react";
import Button from "../Button/Button.component";
import { CartContext } from "../../contexts/cart.contex";
import "./product.style.sass";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addItemtoCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addItemtoCart} buttonType="inverted">
        Add to card
      </Button>
    </div>
  );
};

export default Product;

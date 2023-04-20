import React from "react";
import "./CartItem.style.sass";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span>{name}</span>
        <span>
          {quantity} * {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

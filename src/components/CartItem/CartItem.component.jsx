import React from "react";
import { CartItemContainer, ItemDetails, Image } from "./CartItem.style";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} * {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

import React, { useContext } from "react";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart.style";
import { CartContext } from "../../contexts/cart.contex";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const handleToggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={handleToggle}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

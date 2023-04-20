import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/1.svg";
import "./cart.style.sass";
import { CartContext } from "../../contexts/cart.contex";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const handleToggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={handleToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count ">{cartCount}</span>
    </div>
  );
};

export default CartIcon;

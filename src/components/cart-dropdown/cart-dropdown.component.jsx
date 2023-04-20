import React, { useContext } from "react";
import Button from "../Button/Button.component";
import { CartContext } from "../../contexts/cart.contex";
import "./cart-dropdown.style.sass";
import CartItem from "../CartItem/CartItem.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

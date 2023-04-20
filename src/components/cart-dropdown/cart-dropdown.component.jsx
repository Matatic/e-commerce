import React from "react";
import Button from "../Button/Button.component";
import "./cart-dropdown.style.sass";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

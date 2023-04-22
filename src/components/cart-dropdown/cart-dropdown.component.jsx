import React, { useContext } from "react";
import Button from "../Button/Button.component";
import { CartContext } from "../../contexts/cart.contex";
import "./cart-dropdown.style.sass";
import CartItem from "../CartItem/CartItem.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goTocheckHander = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goTocheckHander}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

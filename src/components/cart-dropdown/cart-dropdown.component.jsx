import React, { useContext } from "react";
import Button from "../Button/Button.component";
import { CartContext } from "../../contexts/cart.contex";
import {
  DropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.style";
import CartItem from "../CartItem/CartItem.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goTocheckHander = () => {
    navigate("/checkout");
  };
  return (
    <DropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goTocheckHander}>GO TO CHECKOUT</Button>
    </DropdownContainer>
  );
};

export default CartDropdown;

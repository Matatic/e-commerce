import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.contex";
import "./checkout.style.sass";
import HeaderComponent from "../../components/Header/Header-component";
import CheckoutItem from "../../components/checkoutItem/checkoutItem.component";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);
  return (
    <>
      <HeaderComponent />
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Descriptions</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => {
          return <CheckoutItem cardItem={cartItem} key={cartItem.id} />;
        })}
        <span style={{ fontSize: "35px" }} className="Total">
          Total:${total}
        </span>
      </div>
    </>
  );
};

export default Checkout;

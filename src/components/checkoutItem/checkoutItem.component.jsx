import React, { useContext } from "react";
import "./checkout.style.sass";
import { CartContext } from "../../contexts/cart.contex";
const CheckoutItem = ({ cardItem }) => {
  const { name, imageUrl, price, quantity } = cardItem;
  const { removeCartToItem, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const removeCartItemHandler = productToremove => {
    removeCartToItem(productToremove);
  };
  const incrementHandler = cardItem => {
    addItemToCart(cardItem);
  };
  const removetHandler = cardItem => {
    removeItemToCart(cardItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="icon" onClick={() => incrementHandler(cardItem)}>
          &#x3c;
        </div>
        {quantity}
        <div className="icon" onClick={() => removetHandler(cardItem)}>
          &#x3e;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeCartItemHandler(cardItem)}
      >
        &#215;
      </div>
    </div>
  );
};

export default CheckoutItem;

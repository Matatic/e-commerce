import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToadd) => {
  const existingId = cartItems.find(item => item.id === productToadd.id);
  if (existingId) {
    return cartItems.map(item =>
      item.id === productToadd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToadd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToremove) => {
  const existingId = cartItems.find(item => item.id === productToremove.id);
  if (existingId.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToremove.id);
  }
  return cartItems.map(item =>
    item.id === productToremove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearItem = (cartItems, removeCard) => {
  return cartItems.filter(cartItem => cartItem.id !== removeCard.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemToCart: () => {},
  removeCartToItem: () => {},
  total: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, newCart) => total + newCart.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, newCart) => total + newCart.quantity * newCart.price,
      0
    );
    setTotal(newCartCount);
  }, [cartItems]);
  const addItemToCart = productToadd => {
    setCartItems(addCartItem(cartItems, productToadd));
  };
  const removeItemToCart = productToremove => {
    setCartItems(removeCartItem(cartItems, productToremove));
  };
  const removeCartToItem = removeCard => {
    setCartItems(clearItem(cartItems, removeCard));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    cartCount,
    removeCartToItem,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

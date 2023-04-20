import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.sass";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/product.contex";
import { CartContextProvider } from "./contexts/cart.contex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

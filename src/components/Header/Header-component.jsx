import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import {
  NavigationWrapper,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Header-style";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase-utils";
import CartIcon from "../CartIcon/Carticon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.contex";

const HeaderComponent = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <NavigationWrapper>
      <LogoContainer to="/">
        <CrownLogo />
      </LogoContainer>
      <NavLinks>
        <NavLink to="/shop">Shop</NavLink>
        {currentUser ? (
          <NavLink as="span" onClick={signOutUser}>
            Sign Out
          </NavLink>
        ) : (
          <NavLink to="/signin">Sign In</NavLink>
        )}
        <div>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </NavLinks>
    </NavigationWrapper>
  );
};

export default HeaderComponent;

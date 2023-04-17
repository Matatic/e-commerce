import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Header-style.sass";
import { UserContext } from "../../contexts/user.context";

const HeaderComponent = () => {
  const { currentUser } = useContext(UserContext);
  console.log("naba", currentUser);
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;

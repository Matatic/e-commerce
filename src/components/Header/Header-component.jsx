import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Header-style.sass";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase-utils";

const HeaderComponent = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        {currentUser ? (
          <span onClick={signOutUser} className="nav-link">
            Sign Out
          </span>
        ) : (
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;

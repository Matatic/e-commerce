import React, { useContext } from "react";
import {
  SignInWithGooglePopup,
  CreateUserDocumentFormAuth,
} from "../../utils/firebase/firebase-utils";
import HeaderComponent from "../../components/Header/Header-component";
import SignUpComponent from "../../components/SignUp/SignUp-component";
import SignInComponent from "../../components/SignIn/Signin.component";
import "./SignIn.sass";
import { UserContext } from "../../contexts/user.context";

const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);
  const LogGoogleuser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userData = CreateUserDocumentFormAuth(user);
    setCurrentUser(user);
  };
  return (
    <>
      <HeaderComponent />
      <div className="auth">
        <SignInComponent handleGoogle={LogGoogleuser} />
        <SignUpComponent />
      </div>
    </>
  );
};

export default SignIn;

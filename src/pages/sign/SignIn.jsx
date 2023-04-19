import React, { useContext } from "react";
import {
  SignInWithGooglePopup,
  CreateUserDocumentFormAuth,
} from "../../utils/firebase/firebase-utils";
import HeaderComponent from "../../components/Header/Header-component";
import SignUpComponent from "../../components/SignUp/SignUp-component";
import SignInComponent from "../../components/SignIn/Signin.component";
import "./SignIn.sass";

const SignIn = () => {
  const LogGoogleuser = async () => {
    await SignInWithGooglePopup();
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

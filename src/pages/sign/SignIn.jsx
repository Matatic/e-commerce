import React from "react";
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
    const { user } = await SignInWithGooglePopup();
    // console.log("response", response);
    const userData = CreateUserDocumentFormAuth(user);
    console.log("helo", userData);
  };
  return (
    <>
      <HeaderComponent />
      <div className="auth">
        <SignInComponent handleGoogle={LogGoogleuser} />
        {/* <button onClick={LogGoogleuser}>Sign Up with Email pop up</button> */}
        <SignUpComponent />
      </div>
    </>
  );
};

export default SignIn;

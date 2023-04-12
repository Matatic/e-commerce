import React from "react";
import {
  SignInWithGooglePopup,
  CreateUserDocumentFormAuth,
} from "../../utils/firebase/firebase-utils";
import HeaderComponent from "../../components/Header/Header-component";
import SignUpComponent from "../../components/SignUp/SignUp-component";

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
      <div>
        <h2>Sign In page</h2>
        <button onClick={LogGoogleuser}>Sign Up with Email pop up</button>
        <SignUpComponent />
      </div>
    </>
  );
};

export default SignIn;

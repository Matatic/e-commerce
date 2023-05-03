import React, { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase-utils";
import FormInput from "../FormInput/Form-input.component";
import { ButtonContainer } from "./Signin.style";
import Button, { BUTTON_CLASS_TYPES } from "../Button/Button.component";

const DefaultFieldsForm = {
  email: "",
  password: "",
};

const SignInComponent = ({ handleGoogle }) => {
  const [formFields, setFormFields] = useState(DefaultFieldsForm);
  const { email, password } = formFields;
  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      ResetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
        default:
          console.log(error);
      }
      console.log("error", error.message);
    }
  };
  const ResetFields = () => {
    setFormFields(DefaultFieldsForm);
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and Password</span>
      <form action="" onSubmit={e => handleSubmit(e)}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={e => handleChange(e)}
          name="password"
          value={password}
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_CLASS_TYPES.google}
            onClick={handleGoogle}
          >
            google
          </Button>
        </ButtonContainer>
      </form>
    </div>
  );
};

export default SignInComponent;

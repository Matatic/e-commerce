import React, { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  CreateUserDocumentFormAuth,
} from "../../utils/firebase/firebase-utils";
import FormInput from "../FormInput/Form-input.component";
import "./SignUp-style.sass";
import Button from "../Button/Button.component";

const DefaultFieldsForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpComponent = () => {
  const [formFields, setFormFields] = useState(DefaultFieldsForm);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await CreateUserDocumentFormAuth(user, { displayName: displayName });
      ResetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already used");
      }
      console.log("error", error.message);
    }
  };
  const ResetFields = () => {
    setFormFields(DefaultFieldsForm);
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and Password</span>
      <form action="" onSubmit={e => handleSubmit(e)}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />
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
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpComponent;

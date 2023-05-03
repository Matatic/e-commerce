import React from "react";
import { BaseButton, GoogleButton, InvertedButton } from "./Button.style";

export const BUTTON_CLASS_TYPES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_CLASS_TYPES.base) =>
  ({
    [BUTTON_CLASS_TYPES.base]: BaseButton,
    [BUTTON_CLASS_TYPES.google]: GoogleButton,
    [BUTTON_CLASS_TYPES.inverted]: InvertedButton,
  }[buttonType]);
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;

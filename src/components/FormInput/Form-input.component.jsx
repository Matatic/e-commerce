import React from "react";
import { Group, FormInputs, InputFormLable } from "./Form-input.style";

const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <FormInputs {...inputOptions} />
      {label && (
        <InputFormLable shrink={inputOptions.value.length}>
          {label}
        </InputFormLable>
      )}
    </Group>
  );
};

export default FormInput;

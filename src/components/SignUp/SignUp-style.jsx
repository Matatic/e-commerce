import styled from "styled-components";
import { BaseButton } from "../Button/Button.style";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  ${BaseButton} {
    position: static;
  }
`;
export const Title = styled.h2`
  margin: 10px 0;
`;

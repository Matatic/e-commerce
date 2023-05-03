import styled from "styled-components";
import {
  BaseButton,
  GoogleButton,
  InvertedButton,
} from "../Button/Button.style";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  ${BaseButton},
  ${GoogleButton},
  ${InvertedButton} {
    position: static;
  }
`;

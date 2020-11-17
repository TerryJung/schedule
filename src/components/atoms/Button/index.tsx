import React, { ButtonHTMLAttributes } from "react";

import styled from "styled-components";

export enum ButtonVariant {
  basic = "basic",
  floodFill = "floodFill",
}

const Container = styled.div`
  box-sizing: border-box;
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant | keyof typeof ButtonVariant;
}

const StyledButton = styled.button<ButtonProps>`
  border: 1px solid
    ${({ variant }) =>
      variant === ButtonVariant.floodFill ? "#609FFF" : "#dcdcdc"};
  border-radius: 5px;
  min-width: 80px;
  min-height: 30px;
  background-color: ${({ variant }) =>
    variant === ButtonVariant.floodFill ? "#609FFF" : "white"};
`;

const Button = ({ children, variant = ButtonVariant.basic }: ButtonProps) => {
  return (
    <Container>
      <StyledButton variant={variant}>{children}</StyledButton>
    </Container>
  );
};

export default Button;

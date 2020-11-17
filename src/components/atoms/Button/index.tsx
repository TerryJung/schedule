import React, { ButtonHTMLAttributes } from 'react';

import styled from 'styled-components';

export enum ButtonVariant {
  Basic,
  FloodFill,
}

const Container = styled.div`
  box-sizing: border-box;
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const StyledButton = styled.button<ButtonProps>`
  border: 1px solid
    ${({ variant }) =>
      variant === ButtonVariant.FloodFill ? '#609FFF' : '#dcdcdc'};
  border-radius: 5px;
  width: 80px;
  height: 30px;
  background-color: ${({ variant }) =>
    variant === ButtonVariant.FloodFill ? '#609FFF' : 'white'};
`;

const Button = ({ children, variant = ButtonVariant.Basic }: ButtonProps) => {
  return (
    <Container>
      <StyledButton variant={variant}>{children}</StyledButton>
    </Container>
  );
};

export default Button;

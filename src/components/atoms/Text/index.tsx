import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  children: string;
  color?: string;
  size?: number;
}

const Container = styled.div``;

const StyledSpan = styled.span<TextProps>`
  height: ${({ size }) => (size ? size + 7 : 20)}px;

  font-family: 'Spoqa Han Sans Regular';
  font-style: normal;
  font-weight: normal;
  font-size: ${({ size }) => size}px;
  line-height: ${({ size }) => (size ? size + 7 : 20)}px;
  color: ${({ color }) => color};
`;

const Text = ({ children, color = 'black', size = 13 }: TextProps) => {
  return (
    <Container>
      <StyledSpan color={color} size={size}>
        {children}
      </StyledSpan>
    </Container>
  );
};

export default Text;

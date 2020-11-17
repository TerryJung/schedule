import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  children: string;
  color?: string;
  size?: number;
}

const Container = styled.div``;

const StyledSpan = styled.span<LabelProps>`
  height: ${({ size }) => (size ? size + 7 : 20)}px;

  font-family: 'Spoqa Han Sans Regular';
  font-style: normal;
  font-weight: bold;
  font-size: ${({ size }) => size}px;
  line-height: ${({ size }) => (size ? size + 7 : 20)}px;
  color: ${({ color }) => color};
`;

const Label = ({ children, color = 'black', size = 13 }: LabelProps) => {
  return (
    <Container>
      <StyledSpan color={color} size={size}>
        {children}
      </StyledSpan>
    </Container>
  );
};

export default Label;

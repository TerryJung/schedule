import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  children: string;
  color?: string;
  size?: number;
  noSelect?: boolean;
}

const StyledSpan = styled.span<LabelProps>`
  height: ${({ size }) => (size ? size + 7 : 20)}px;

  font-family: 'Spoqa Han Sans Regular';
  font-style: normal;
  font-weight: bold;
  font-size: ${({ size }) => size}px;
  line-height: ${({ size }) => (size ? size + 7 : 20)}px;
  color: ${({ color }) => color};
  user-select: ${({ noSelect }) => (noSelect ? 'none' : undefined)};
`;

const Label = ({
  children,
  color = 'black',
  size = 13,
  noSelect = false,
}: LabelProps) => {
  return (
    // <Container>
    <StyledSpan color={color} size={size} noSelect={noSelect}>
      {children}
    </StyledSpan>
    // </Container>
  );
};

export default Label;

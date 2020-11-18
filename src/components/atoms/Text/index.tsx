import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  children: JSX.Element | string;
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Container = styled.div``;

const StyledSpan = styled.span<TextProps>`
  height: ${({ size }) => (size ? size + 7 : 20)}px;
  display: block;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;

  font-family: 'Spoqa Han Sans Regular';
  font-style: normal;
  font-weight: normal;
  font-size: ${({ size }) => size}px;
  line-height: ${({ size }) => (size ? size + 7 : 20)}px;
  color: ${({ color }) => color};

  /* text-align: left; */
`;

const Text = ({ children, color = 'black', size = 13, style }: TextProps) => {
  return (
    <Container>
      <StyledSpan color={color} size={size} style={style}>
        {children}
      </StyledSpan>
    </Container>
  );
};

export default Text;

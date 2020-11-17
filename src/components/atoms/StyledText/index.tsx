import React from 'react';
import styled from 'styled-components';

export interface StyledTextProps {
  children: string;
  color?: string;
  size?: number;
}

const Container = styled.div`
  height: 30px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  width: 120px;
  text-align: center;
`;

const StyledSpan = styled.span<StyledTextProps>`
  display: block;
  height: ${({ size }) => (size ? size + 7 : 20)}px;
  font-family: 'Spoqa Han Sans Regular';
  font-style: normal;
  font-weight: normal;
  font-size: ${({ size }) => size}px;
  line-height: ${({ size }) => (size ? size + 7 : 20)}px;
  color: ${({ color }) => color};
`;

const StyledText = ({
  children,
  color = 'black',
  size = 13,
}: StyledTextProps) => {
  return (
    <Container>
      <StyledSpan color={color} size={size}>
        {children}
      </StyledSpan>
    </Container>
  );
};

export default StyledText;

import React from 'react';
import styled from 'styled-components';

export interface CircleProps {
  size?: number;
  color?: string;
}

const Content = styled.div<CircleProps>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  box-sizing: border-box;
`;

const Circle = ({ size = 16, color }: CircleProps) => {
  return <Content color={color} size={size} />;
};

export default Circle;

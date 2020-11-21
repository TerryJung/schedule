import React from "react";
import styled from "styled-components";

export interface CircleProps {
  size?: number;
  color?: string;
  hover?: boolean;
  alwaysHover?: boolean;
}

const Container = styled.div`
  display: flex;
  position: relative;
`;
const HoverCircle = styled.div<CircleProps>`
  position: absolute;
  height: ${({ size }) => (size ? size * 3 : 0)}px;
  width: ${({ size }) => (size ? size * 3 : 0)}px;
  border-radius: 50%;
  box-sizing: border-box;
  left: -${({ size }) => size}px;
  top: -${({ size }) => size}px;
  :hover {
    background-color: rgba(96, 159, 255, 0.15);
  }
  background-color: ${({ alwaysHover }) => "rgba(96, 159, 255, 0.15)"};
`;
const Content = styled.div<CircleProps>`
  position: relative;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  box-sizing: border-box;
`;

const Circle = ({
  size = 16,
  color,
  hover = false,
  alwaysHover = false,
}: CircleProps) => {
  return (
    <Container>
      <Content color={color} size={size} />
      {hover && <HoverCircle size={size} hover={hover} />}
    </Container>
  );
};

export default Circle;

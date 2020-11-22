import React, { HTMLAttributes } from "react";
import styled from "styled-components";

export interface StyledBoxProps extends HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
}

const Container = styled.div<StyledBoxProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.05), 0px 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

const StyledBox = ({ width, height, children, ...props }: StyledBoxProps) => {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  );
};

export default StyledBox;

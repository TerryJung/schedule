import React from "react";
import styled from "styled-components";
import Text, { TextProps } from "../Text";

export interface StyledTextProps extends TextProps {
  width?: number;
}

const Container = styled.div<StyledTextProps>`
  /* min-height: 30px; */
  height: ${({ size }) => (size ? size + 17 : 30)}px;
  /* height: 50px; */
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  width: ${({ width }) => width}px;
`;

const StyledText = ({
  children,
  color = "black",
  size = 13,
  style,
  width,
}: StyledTextProps) => {
  return (
    <Container width={width} size={size} style={style}>
      <Text
        color={color}
        size={size}
        style={{ overflow: "hidden", textAlign: "center", width }}
      >
        {children}
      </Text>
    </Container>
  );
};

export default StyledText;

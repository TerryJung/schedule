import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import Icons, { iconList } from "../../../components/atoms/Icons";
import Text, { TextProps } from "../../../components/atoms/Text";

interface StyledTextWithIconProps extends TextProps {
  iconColor: string;
  iconName: keyof typeof iconList;
  width: number;
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width: number;
}

const Container = styled.div<ContainerProps>`
  justify-content: center;
  display: flex;
  cursor: pointer;

  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 5px;
  height: 30px;
  width: ${({ width }) => width}px;
`;

const IconContainer = styled.div`
  top: 3px;
`;

const Center = styled.div`
  display: flex;
`;
const StyledIconWithText = ({
  children,
  iconName,
  iconColor,
  style,
  width,
  ...props
}: StyledTextWithIconProps & ContainerProps) => {
  return (
    <Container width={width} {...props}>
      <Center>
        <IconContainer>
          <Icons name={iconName} color={iconColor} size={24} />
        </IconContainer>
        <Text
          size={13}
          style={{
            ...style,
            boxSizing: "border-box",
            margin: 5,
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {children}
        </Text>
      </Center>
    </Container>
  );
};

export default StyledIconWithText;

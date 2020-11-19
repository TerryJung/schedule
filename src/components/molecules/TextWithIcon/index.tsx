import React from "react";
import Icons from "../../atoms/Icons/index";
import styled from "styled-components";
import Text, { TextProps } from "../../atoms/Text/index";
import { iconList } from "../../atoms/Icons/index";

interface TextWithIconProps extends TextProps {
  iconColor: string;
  iconName: keyof typeof iconList | null;
  width: number;
}

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
`;

const Container = styled.div`
  position: absolute;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 5px;
`;

interface EmptySpaceProps {
  width: number;
}

const EmptySpace = styled.div<EmptySpaceProps>`
  height: 30px;
  width: ${({ width }) => width}px;
`;

const TextWithIcon = ({
  children,
  iconName,
  iconColor,
  style,
  width,
}: TextWithIconProps) => {
  return (
    <Wrapper>
      <Container>
        <Text
          size={13}
          style={{
            ...style,
            boxSizing: "border-box",
            width: width - 44,
            margin: 5,
            marginLeft: 10,
            marginRight: 34,
            overflow: "hidden",
          }}
        >
          {children}
        </Text>
        {iconName && (
          <IconContainer>
            <Icons name={iconName} color={iconColor} size={24} />
          </IconContainer>
        )}
      </Container>
      <EmptySpace width={width} />
    </Wrapper>
  );
};

export default TextWithIcon;

import React from 'react';
import Icons from '../../atoms/Icons/index';
import styled from 'styled-components';
import Text, { TextProps } from '../../atoms/Text/index';
import { iconList } from '../../atoms/Icons/index';

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: absolute;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 5px;
`;

const EmptySpace = styled.div`
  height: 30px;
`;

interface TextWithIconProps extends TextProps {
  iconColor: string;
  iconName: keyof typeof iconList;
}

const TextWithIcon = ({
  children,
  iconName,
  iconColor,
  style,
}: TextWithIconProps) => {
  return (
    <Wrapper>
      <Container>
        <Text
          size={13}
          style={{
            ...style,
            padding: 5,
            paddingLeft: 10,
            paddingRight: 29,
            overflow: 'hidden',
          }}
        >
          {children}
        </Text>
        <IconContainer>
          <Icons name={iconName} color={iconColor} size={24} />
        </IconContainer>
      </Container>
      <EmptySpace />
    </Wrapper>
  );
};

export default TextWithIcon;

import React from 'react';
import Icons from '../../atoms/Icons';
import styled from 'styled-components';
import { iconList } from '../../atoms/Icons';
import Text, { TextProps } from '../../atoms/Text';

interface StyledTextWithIconProps extends TextProps {
  iconColor: string;
  iconName: keyof typeof iconList;
  width: number;
}

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
`;

const Container = styled.div`
  position: absolute;

  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 5px;
  height: 30px;
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

const StyledTextWithIcon = ({
  children,
  iconName,
  iconColor,
  style,
  width,
}: StyledTextWithIconProps) => {
  return (
    <div style={{ borderWidth: 1, borderColor: 'black' }}>
      <Wrapper>
        <Container>
          <Text
            size={13}
            style={{
              ...style,
              boxSizing: 'border-box',
              width: width - 46,
              margin: 5,
              marginLeft: 10,
              marginRight: 34,
              overflow: 'hidden',
            }}
          >
            {children}
          </Text>
          <IconContainer>
            <Icons name={iconName} color={iconColor} size={24} />
          </IconContainer>
        </Container>
        <EmptySpace width={width} />
      </Wrapper>
    </div>
  );
};

export default StyledTextWithIcon;

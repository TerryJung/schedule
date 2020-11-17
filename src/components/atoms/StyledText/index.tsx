import React from 'react';
import styled from 'styled-components';
import Text, { TextProps } from '../Text/index';

export interface StyledTextProps extends TextProps {}

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

const StyledText = ({
  children,
  color = 'black',
  size = 13,
  style,
}: StyledTextProps) => {
  return (
    <Container>
      <Text color={color} size={size} style={{ overflow: 'hidden', ...style }}>
        {children}
      </Text>
    </Container>
  );
};

export default StyledText;

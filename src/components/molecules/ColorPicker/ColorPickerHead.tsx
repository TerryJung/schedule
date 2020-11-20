import React from 'react';
import Circle from '../../atoms/Circle/index';
import Icons from '../../atoms/Icons';
import styled from 'styled-components';

interface ColorPickerHeadProps {
  size?: number;
  color?: string;
}

const Container = styled.div<ColorPickerHeadProps>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50%;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColorPickerHead = ({ color, size = 24 }: ColorPickerHeadProps) => {
  return (
    <>
      {color ? (
        <Circle color="color" size={size ? size : undefined} />
      ) : (
        <Container size={size}>
          <Icons name="ColorPicker" size={size} />
        </Container>
      )}
    </>
  );
};

export default ColorPickerHead;

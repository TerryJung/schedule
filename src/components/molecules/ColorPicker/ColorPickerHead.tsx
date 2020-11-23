import React, { useState } from 'react';
import Circle from '../../atoms/Circle/index';
import Icons from '../../atoms/Icons';
import styled from 'styled-components';

interface ColorPickerHeadProps {
  size?: number;
  color?: string;
}
interface ContainerProps {
  size: number;
}

const Container = styled.div<ContainerProps>`
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
  const [hoverStatus, setHoverStatus] = useState(false);

  return (
    <>
      {color ? (
        <Circle color={color} size={size ? size : undefined} />
      ) : (
        <Container
          size={size}
          onMouseOver={() => setHoverStatus(true)}
          onMouseOut={() => setHoverStatus(false)}
        >
          <Icons
            name="ColorPicker"
            color={hoverStatus ? '#609FFF' : '#DCDCDC'}
            size={size}
          />
        </Container>
      )}
    </>
  );
};

export default ColorPickerHead;

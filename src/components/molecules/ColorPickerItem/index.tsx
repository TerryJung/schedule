import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/Text/index';
import Circle from '../../atoms/Circle/index';

interface ColorPickerItemProps {
  text: string;
  color: string;
  circleSize?: number;
  selected: boolean;
  keyboardSelected?: boolean;
  onClick?: () => void;
}

interface ContainerProps {
  selected: boolean;
  keyboardSelected: boolean;
}

const Container = styled.div<ContainerProps>`
  background: ${({ keyboardSelected }) =>
    keyboardSelected ? 'rgba(96, 159, 255, 0.15)' : 'white'};
  color: ${({ selected }) => (selected ? '#609FFF' : 'black')};
  :hover {
    background: rgba(0, 0, 0, 0.03);
  }
  box-sizing: 'border-box';
  width: 100%;
  display: flex;
  align-items: center;
`;

const CircleContainer = styled.div`
  padding: 7px 5px 7px 10px;
`;

const ColorPickerItem = ({
  text,
  color,
  circleSize = 16,
  selected,
  onClick,
  keyboardSelected = false,
}: ColorPickerItemProps) => {
  return (
    <Container
      selected={selected}
      keyboardSelected={keyboardSelected}
      onClick={onClick}
    >
      <CircleContainer>
        <Circle color={color} size={circleSize} />
      </CircleContainer>

      <Text size={13}>{text}</Text>
    </Container>
  );
};

export default ColorPickerItem;

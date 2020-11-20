import React from 'react';
import styled from 'styled-components';
import Circle from '../../atoms/Circle/index';
import TextWithIcon from '../TextWithIcon/index';

interface ColorPickerItemProps {
  text: string;
  color: string;
  circleSize?: number;
  selected: boolean;
  width: number;
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
  width,
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

      <TextWithIcon
        iconColor={selected ? '#609FFF' : 'white'}
        iconName={selected ? 'Check' : null}
        width={width - 31}
      >
        {text}
      </TextWithIcon>
    </Container>
  );
};

export default ColorPickerItem;

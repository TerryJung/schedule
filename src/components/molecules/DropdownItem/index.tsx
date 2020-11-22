import React from 'react';
import TextWithIcon from '../TextWithIcon';
import styled from 'styled-components';

interface DropdownItemProps {
  text: string;
  selected: boolean;
  keyboardSelected?: boolean;
  width: number;
  onClick?: () => void;
}

interface ContainerProps {
  selected: boolean;
  keyboardSelected: boolean;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  background: ${({ keyboardSelected }) =>
    keyboardSelected ? 'rgba(96, 159, 255, 0.15)' : 'white'};
  color: ${({ selected }) => (selected ? '#609FFF' : 'black')};
  :hover {
    background: rgba(0, 0, 0, 0.03);
  }
  box-sizing: 'border-box';
  width: 100%;

  /* z-index: 10;
  display: block; */
  z-index: 10000;
`;

const DropdownItem = ({
  text,
  selected,
  width,
  onClick,
  keyboardSelected = false,
}: DropdownItemProps) => {
  return (
    <Container
      selected={selected}
      keyboardSelected={keyboardSelected}
      onClick={onClick}
    >
      <TextWithIcon
        iconColor={selected ? '#609FFF' : 'white'}
        iconName={selected ? 'Check' : null}
        width={width}
        // style={{ zIndex: 10000 }}
      >
        {text}
      </TextWithIcon>
    </Container>
  );
};

export default DropdownItem;

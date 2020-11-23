import React, { useState } from "react";
import styled from "styled-components";
import DropdownItem from "../DropdownItem";
import { useEffect } from "react";
import useKeyDown from "../../../hooks/useKeyDown";
export interface DropdownItemListProps {
  width: number;
  list: string[];
  selected: number | null;
  onChangeSelected: (value: number | null) => void;
  autoSelect?: boolean;
}

interface ContainerProps {
  width: number;
  length: number;
}

const Container = styled.div<ContainerProps>`
  height: ${({ length }) => length * 30}px;
  overflow: auto;
  width: ${({ width }) => width}px;

  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  z-index: 10000;
  background-color: white;
`;

const DropdownItemList = ({
  width,
  list,
  selected,
  onChangeSelected,
  autoSelect = true,
}: DropdownItemListProps) => {
  const [keyboardSelected, setKeyboardSelected] = useState(0);

  useEffect(() => {
    if (autoSelect && selected === null) {
      onChangeSelected(0);
    }
  }, [autoSelect, selected, onChangeSelected]);

  useKeyDown(38, () =>
    setKeyboardSelected(keyboardSelected !== 0 ? keyboardSelected - 1 : 0)
  );
  useKeyDown(40, () =>
    setKeyboardSelected(
      keyboardSelected !== list.length - 1
        ? keyboardSelected + 1
        : keyboardSelected
    )
  );

  useKeyDown(13, () => handleClick(keyboardSelected));

  function handleClick(index: number) {
    if (selected === index && !autoSelect) {
      onChangeSelected(null);
    } else {
      onChangeSelected(index);
    }
  }

  console.log(Math.min(6, list.length));
  return (
    <Container width={width} length={Math.min(6, list.length)}>
      {list.map((text, index) => (
        <DropdownItem
          key={`${text}${index}`}
          text={text}
          selected={index === selected}
          keyboardSelected={index === keyboardSelected}
          width={width}
          onClick={() => handleClick(index)}
        />
      ))}
    </Container>
  );
};

export default DropdownItemList;

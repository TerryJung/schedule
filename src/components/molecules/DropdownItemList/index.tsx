import React, { useState } from "react";
import styled from "styled-components";
import DropdownItem from "../DropdownItem";
import { useEffect } from "react";
export interface DropdownItemListProps {
  width: number;
  list: string[];
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
  autoSelect?: boolean;
}

interface ContainerProps {
  width: number;
}

const Container = styled.div<ContainerProps>`
  height: 180px;
  overflow: auto;
  width: ${({ width }) => width}px;
  background: #ffffff;

  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

const DropdownItemList = ({
  width,
  list,
  selected,
  setSelected,
  autoSelect = true,
}: DropdownItemListProps) => {
  const [keyboardSelected, setKeyboardSelected] = useState(0);

  useEffect(() => {
    if (autoSelect && selected === null) {
      setSelected(0);
    }
  }, [autoSelect, selected, setSelected]);

  function handleClick(index: number) {
    if (selected === index && !autoSelect) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  }

  return (
    <Container width={width}>
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

import React, { useState } from "react";
import styled from "styled-components";
import DropdownItem from "../DropdownItem";
interface DropdownItemListProps {
  width: number;
  texts: string[];
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

const DropdownItemList = ({ width, texts }: DropdownItemListProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  function handleClick(index: number) {
    console.log(index, selected);
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  }

  return (
    <Container width={width}>
      {texts.map((text, index) => (
        <DropdownItem
          text={text}
          selected={index === selected}
          width={width}
          onClick={() => handleClick(index)}
        />
      ))}
    </Container>
  );
};

export default DropdownItemList;

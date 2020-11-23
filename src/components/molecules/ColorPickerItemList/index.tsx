import React, { useState } from "react";
import styled from "styled-components";
import ColorPickerItem from "../ColorPickerItem";
import useKeyDown from "../../../hooks/useKeyDown";
import Label from "../../atoms/Label";

export interface ColorPickerItemListProps {
  width: number;
  list: {
    label: string;
    color: string;
  }[];
  selected: number | null;
  onChangeSelect: (value: number | null) => void;
}

const LabelContainer = styled.div`
  box-sizing: border-box;
  padding: 4px 10px;
  height: 29px;
  border-bottom: 1px solid #dcdcdc;
`;

interface ContainerProps {
  width: number;
}

const Container = styled.div<ContainerProps>`
  max-height: 300px;
  overflow: auto;
  width: ${({ width }) => width}px;
  background: #ffffff;

  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

const ColorPickerItemList = ({
  width,
  list,
  selected,
  onChangeSelect,
}: ColorPickerItemListProps) => {
  const [keyboardSelected, setKeyboardSelected] = useState(0);

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
    onChangeSelect(index);
  }

  return (
    <Container width={width}>
      <LabelContainer>
        <Label color="#999999" size={11}>
          스케줄 색상
        </Label>
      </LabelContainer>
      {list.map(({ label, color }, index) => (
        <ColorPickerItem
          key={`${color}${index}`}
          text={label}
          color={color}
          selected={index === selected}
          keyboardSelected={index === keyboardSelected}
          onClick={() => handleClick(index)}
          width={width}
        />
      ))}
    </Container>
  );
};

export default ColorPickerItemList;

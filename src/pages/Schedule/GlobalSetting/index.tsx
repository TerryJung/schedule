import React, { useState } from "react";
import styled from "styled-components";
import InputWithLabel from "../../../components/molecules/InputWithLabel";
import ColorPicker from "../../../components/molecules/ColorPicker/index";

const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  height: 60px;
`;

const ColorPickerContainer = styled.div`
  padding: 25px 10px;
`;

interface GlobalSettingProps {
  scheduleName: string;
  onScheduleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  colorSelected: number | null;
  setColorSelected: React.Dispatch<React.SetStateAction<number | null>>;
}

const GlobalSetting = ({
  scheduleName,
  onScheduleNameChange,
  colorSelected,
  setColorSelected,
}: GlobalSettingProps) => {
  const colorPickerList = [
    { label: "블루", color: "#4C85DA" },
    { label: "그린", color: "#00ADA2" },
    { label: "옐로우", color: "#EEA51C" },
    { label: "레드", color: "#E76E63" },
    { label: "핑크", color: "#FFB2C9" },
    { label: "퍼플", color: "#CE66DF" },
    { label: "하늘", color: "#71CBF2" },
    { label: "연두", color: "#ADD639" },
    { label: "바이올렛", color: "#9874FF" },
  ];

  return (
    <Container>
      <InputWithLabel
        labelText="스케줄 이름"
        value={scheduleName}
        onChange={onScheduleNameChange}
      />
      <ColorPickerContainer>
        <ColorPicker
          width={140}
          list={colorPickerList}
          selected={colorSelected}
          setSelected={setColorSelected}
        />
      </ColorPickerContainer>
    </Container>
  );
};

export default GlobalSetting;

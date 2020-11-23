import React from 'react';
import styled from 'styled-components';
import InputWithLabel from '../../../components/molecules/InputWithLabel';
import ColorPicker from '../../../components/molecules/ColorPicker/index';

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

  list: {
    label: string;
    color: string;
  }[];
}

const GlobalSetting = ({
  scheduleName,
  onScheduleNameChange,
  colorSelected,
  setColorSelected,
  list,
}: GlobalSettingProps) => {
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
          list={list}
          selected={colorSelected}
          setSelected={setColorSelected}
        />
      </ColorPickerContainer>
    </Container>
  );
};

export default GlobalSetting;

import React, { useState } from 'react';
import Label from '../../components/atoms/Label/index';
import styled from 'styled-components';
import ColorPicker from '../../components/molecules/ColorPicker/index';

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesColorPicker = () => {
  const [selected1, setSelected1] = useState<null | number>(null);

  const colorPickerList = [
    { label: '블루', color: '#4C85DA' },
    { label: '그린', color: '#00ADA2' },
    { label: '옐로우', color: '#EEA51C' },
    { label: '레드', color: '#E76E63' },
    { label: '핑크', color: '#FFB2C9' },
    { label: '퍼플', color: '#CE66DF' },
    { label: '하늘', color: '#71CBF2' },
    { label: '연두', color: '#ADD639' },
    { label: '바이올렛', color: '#9874FF' },
  ];

  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - ColorPicker
      </Label>
      <FlexRowContainer>
        <ColorPicker
          width={140}
          list={colorPickerList}
          selected={selected1}
          setSelected={setSelected1}
        />
      </FlexRowContainer>
    </>
  );
};

export default MoleculesColorPicker;

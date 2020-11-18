import React, { useState } from 'react';
import Label from '../../components/atoms/Label/index';
import styled from 'styled-components';
import InputWithIcon from '../../components/molecules/InputWithIcon';

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesInputWithIcon = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - InputWithIcon
      </Label>
      <FlexRowContainer>
        <InputWithIcon
          iconName="Calendar"
          iconColor="#999999"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          width={120}
        />
        <InputWithIcon
          iconName="AddCalendar"
          iconColor="#999999"
          value={text2}
          width={120}
          onChange={(e) => setText2(e.target.value)}
        />
        <InputWithIcon
          iconName="Clear"
          iconColor="#999999"
          value={text3}
          width={120}
          onChange={(e) => setText3(e.target.value)}
        />
      </FlexRowContainer>
    </>
  );
};

export default MoleculesInputWithIcon;

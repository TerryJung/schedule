import React, { useState } from 'react';
import Input, { InputProps } from '../../atoms/Input';
import Icons, { iconList } from '../../atoms/Icons/index';
import styled from 'styled-components';
import Text from '../../atoms/Text/index';

const Container = styled.div`
  position: absolute;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 5px;
`;

const EmptySpace = styled.div`
  height: 30px;
`;

// interface DropdownProps extends InputProps {
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   iconName: keyof typeof iconList;
//   iconColor?: string;
// }

const Dropdown = ({ ...props }) => {
  return (
    <div>
      <Container>
        <Text>hah</Text>
        <IconContainer>
          <Icons name="LineArrowDown" size={24} />
        </IconContainer>
      </Container>
      <EmptySpace />

      <div style={{ position: 'absolute' }}></div>
    </div>
  );
};

export default Dropdown;

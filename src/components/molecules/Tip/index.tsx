import React from 'react';
import Icons from '../../atoms/Icons/index';
import styled from 'styled-components';
import Label from '../../atoms/Label';

interface TipProps {
  label: string;
}

const IconContainer = styled.div`
  padding: 2px 3px 2px 5px;
`;

const LabelContainer = styled.div`
  padding: 0px;
`;

const Tip = ({ label }: TipProps) => {
  return (
    <div
      style={{
        flexDirection: 'row',
        display: 'flex',
        position: 'relative',
        marginLeft: 4,
      }}
    >
      <IconContainer>
        <Icons name="Information" color={'#999999'} size={16} />
      </IconContainer>
      <LabelContainer>
        <Label size={11} color="#999999">
          {label}
        </Label>
      </LabelContainer>
    </div>
  );
};

export default Tip;

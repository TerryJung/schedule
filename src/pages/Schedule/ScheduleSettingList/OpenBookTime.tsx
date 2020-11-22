import React from 'react';
import styled from 'styled-components';
import Dropdown from '../../../components/molecules/Dropdown';
import IconWithLabel from '../../../components/molecules/IconWithLabel/index';
import Tip from '../../../components/molecules/Tip/index';

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 130px;
`;

const IconWithLabelContainer = styled.div`
  padding: 9px;
`;

const PickAndResultContainer = styled.div`
  height: 55px;
  padding: 0px 30px;
`;

const TipContainer = styled.div`
  position: absolute;
  top: 90px;
  padding: 10px 0px;
  z-index: -20;
`;

export interface OpenBookTimeProps {
  chooseTime: string[];
  timeSelected: number | null;
  setTimeSelected: React.Dispatch<React.SetStateAction<number | null>>;
}

const OpenBookTime = ({
  chooseTime,
  timeSelected,
  setTimeSelected,
}: OpenBookTimeProps) => {
  return (
    <Container>
      <IconWithLabelContainer>
        <IconWithLabel
          iconColor="#999999"
          icon="OpenFolder"
          label="예약 오픈 시간"
        />
      </IconWithLabelContainer>
      <PickAndResultContainer>
        <Dropdown
          width={135}
          list={chooseTime}
          autoSelect
          selected={timeSelected}
          setSelected={setTimeSelected}
        />
        <TipContainer>
          <Tip
            label={`2020-10-15 기준 ${
              chooseTime[timeSelected || 0]
            }부터 예약이 오픈됩니다.`}
          />
        </TipContainer>
      </PickAndResultContainer>
    </Container>
  );
};

export default OpenBookTime;

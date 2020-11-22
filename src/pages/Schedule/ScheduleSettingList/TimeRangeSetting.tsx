import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../../components/molecules/Dropdown';
import IconWithLabel from '../../../components/molecules/IconWithLabel/index';
import RangePicker from '../../../components/molecules/RangePicker';
import Tip from '../../../components/molecules/Tip/index';

const Container = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  height: 100px;
`;

const IconWithLabelContainer = styled.div`
  padding: 9px;
`;

const PickAndResultContainer = styled.div`
  padding: 0px 30px;
`;

const TipContainer = styled.div`
  padding: 10px 0px;
`;

export interface TimeRangeSettingProps {
  chooseTime: string[];
  timeSelected: number | null;
  setTimeSelected: React.Dispatch<React.SetStateAction<number | null>>;
}

const TimeRangeSetting = ({
  chooseTime,
  timeSelected,
  setTimeSelected,
}: TimeRangeSettingProps) => {
  const base = [{ start: 0, end: 150 }];

  const [timeRanges1, setTimeRanges1] = useState(base);

  const labels = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
  ];

  return (
    <Container>
      <RangePicker
        width={150}
        number={10}
        labels={labels}
        reset
        color="#609FFF"
        timeRanges={timeRanges1}
        setTimeRanges={setTimeRanges1}
      />
    </Container>
  );
};

export default TimeRangeSetting;

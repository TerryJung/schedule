import React from 'react';
import styled from 'styled-components';
import OpenBookTime from './OpenBookTime';
import { OpenBookTimeProps } from './OpenBookTime';
import TimeRangeSetting from './TimeRangeSetting';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export interface TimeSettingProps extends OpenBookTimeProps {}

const TimeSetting = ({
  chooseTime,
  timeSelected,
  setTimeSelected,
}: TimeSettingProps) => {
  return (
    <Container>
      <OpenBookTime
        chooseTime={chooseTime}
        timeSelected={timeSelected}
        setTimeSelected={setTimeSelected}
      />
      <TimeRangeSetting
        chooseTime={chooseTime}
        timeSelected={timeSelected}
        setTimeSelected={setTimeSelected}
      />
    </Container>
  );
};

export default TimeSetting;

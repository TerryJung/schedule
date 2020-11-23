import React from "react";
import styled from "styled-components";
import OpenBookTime from "./OpenBookTime";
import { OpenBookTimeProps } from "./OpenBookTime";
import TimeRangeSetting from "./TimeRangeSetting";
import { TimeRangeSettingProps } from "./TimeRangeSetting";

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
  onChangeTimeSelected,
  timeRanges,
  onChangeTimeRanges,
  timeLabels,
  color,
}: OpenBookTimeProps & TimeRangeSettingProps) => {
  return (
    <Container>
      <OpenBookTime
        chooseTime={chooseTime}
        timeSelected={timeSelected}
        onChangeTimeSelected={onChangeTimeSelected}
      />
      <TimeRangeSetting
        timeRanges={timeRanges}
        onChangeTimeRanges={onChangeTimeRanges}
        timeLabels={timeLabels}
        color={color}
      />
    </Container>
  );
};

export default TimeSetting;

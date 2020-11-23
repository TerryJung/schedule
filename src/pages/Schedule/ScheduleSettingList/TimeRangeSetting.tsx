import React, { useState } from "react";
import styled from "styled-components";
import IconWithLabel from "../../../components/molecules/IconWithLabel/index";
import RangePicker from "../../../components/molecules/RangePicker";
import Text from "../../../components/atoms/Text/index";
import { iRange } from "../../../components/molecules/RangePicker/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  height: 100px;
`;

const IconWithLabelContainer = styled.div`
  padding: 9px;
`;

const TextAndRangePickerContainer = styled.div`
  padding-left: 30px;
  display: flex;
  height: 40px;
`;

const RangePickerContainer = styled.div`
  position: relative;
  top: 5px;
  left: 34px;
`;

export interface TimeRangeSettingProps {
  timeRanges: iRange[][];
  onChangeTimeRanges: (value: iRange[][]) => void;
  timeLabels: string[];
  color: string;
}

const TimeRangeSetting = ({
  timeRanges,
  onChangeTimeRanges,
  timeLabels,
  color,
}: TimeRangeSettingProps) => {
  const base = [{ start: 0, end: 300 }];
  const days = ["월", "화", "수", "목", "금", "토", "일"];

  const [mondayTimeRanges, setMondayTimeRanges] = useState(base);
  const [tuesdayTimeRanges, setTuesdayTimeRanges] = useState(base);
  const [wednesdayTimeRanges, setWednesdayTimeRanges] = useState(base);
  const [thursdayTimeRanges, setThursdayTimeRanges] = useState(base);
  const [fridayTimeRanges, setFridayTimeRanges] = useState(base);
  const [saturdayTimeRanges, setSaturdayTimeRanges] = useState(base);
  const [sundayTimeRanges, setSundayTimeRanges] = useState(base);

  return (
    <Container>
      <IconWithLabelContainer>
        <IconWithLabel iconColor="#999999" icon="Clock" label="업무시간설정" />
      </IconWithLabelContainer>
      {days.map((day, index) => (
        <TextAndRangePickerContainer>
          <Text>{day}</Text>
          <RangePickerContainer>
            <RangePicker
              width={300}
              number={23}
              labels={timeLabels}
              reset
              color={color}
              timeRanges={timeRanges[index]}
              onChangeTimeRanges={(value) =>
                onChangeTimeRanges([
                  ...timeRanges.slice(0, index),
                  value,
                  ...timeRanges.slice(index + 1),
                ])
              }
            />
          </RangePickerContainer>
        </TextAndRangePickerContainer>
      ))}
    </Container>
  );
};

export default TimeRangeSetting;

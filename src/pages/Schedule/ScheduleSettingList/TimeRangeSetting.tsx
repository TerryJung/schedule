import React, { useState } from 'react';
import styled from 'styled-components';
import IconWithLabel from '../../../components/molecules/IconWithLabel/index';
import RangePicker from '../../../components/molecules/RangePicker';
import Text from '../../../components/atoms/Text/index';

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
  chooseTime: string[];
  timeSelected: number | null;
  setTimeSelected: React.Dispatch<React.SetStateAction<number | null>>;
}

const TimeRangeSetting = ({
  chooseTime,
  timeSelected,
  setTimeSelected,
}: TimeRangeSettingProps) => {
  const base = [{ start: 0, end: 300 }];

  const [mondayTimeRanges, setMondayTimeRanges] = useState(base);
  const [tuesdayTimeRanges, setTuesdayTimeRanges] = useState(base);
  const [wednesdayTimeRanges, setWednesdayTimeRanges] = useState(base);
  const [thursdayTimeRanges, setThursdayTimeRanges] = useState(base);
  const [fridayTimeRanges, setFridayTimeRanges] = useState(base);
  const [saturdayTimeRanges, setSaturdayTimeRanges] = useState(base);
  const [sundayTimeRanges, setSundayTimeRanges] = useState(base);

  const labels = [
    '08:30',
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
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ];

  return (
    <Container>
      <IconWithLabelContainer>
        <IconWithLabel iconColor="#999999" icon="Clock" label="업무시간설정" />
      </IconWithLabelContainer>
      <TextAndRangePickerContainer>
        <Text>월</Text>
        <RangePickerContainer>
          <RangePicker
            width={300}
            number={23}
            labels={labels}
            reset
            color="#609FFF"
            timeRanges={mondayTimeRanges}
            setTimeRanges={setMondayTimeRanges}
          />
        </RangePickerContainer>
      </TextAndRangePickerContainer>
      <TextAndRangePickerContainer>
        <Text>화</Text>
        <RangePickerContainer>
          <RangePicker
            width={300}
            number={23}
            labels={labels}
            reset
            color="#609FFF"
            timeRanges={tuesdayTimeRanges}
            setTimeRanges={setTuesdayTimeRanges}
          />
        </RangePickerContainer>
      </TextAndRangePickerContainer>

      <TextAndRangePickerContainer>
        <Text>수</Text>
        <RangePickerContainer>
          <RangePicker
            width={300}
            number={23}
            labels={labels}
            reset
            color="#609FFF"
            timeRanges={wednesdayTimeRanges}
            setTimeRanges={setWednesdayTimeRanges}
          />
        </RangePickerContainer>
      </TextAndRangePickerContainer>

      <TextAndRangePickerContainer>
        <Text>목</Text>
        <RangePickerContainer>
          <RangePicker
            width={300}
            number={23}
            labels={labels}
            reset
            color="#609FFF"
            timeRanges={thursdayTimeRanges}
            setTimeRanges={setThursdayTimeRanges}
          />
        </RangePickerContainer>
      </TextAndRangePickerContainer>

      <TextAndRangePickerContainer>
        <Text>금</Text>
        <RangePickerContainer>
          <RangePicker
            width={300}
            number={23}
            labels={labels}
            reset
            color="#609FFF"
            timeRanges={fridayTimeRanges}
            setTimeRanges={setFridayTimeRanges}
          />
        </RangePickerContainer>
      </TextAndRangePickerContainer>

      <TextAndRangePickerContainer>
        <Text>토</Text>
        <RangePickerContainer>
          <RangePicker
            width={300}
            number={23}
            labels={labels}
            reset
            color="#609FFF"
            timeRanges={saturdayTimeRanges}
            setTimeRanges={setSaturdayTimeRanges}
          />
        </RangePickerContainer>
      </TextAndRangePickerContainer>

      <TextAndRangePickerContainer>
        <Text>일</Text>
        <RangePickerContainer>
          <RangePicker
            width={300}
            number={23}
            labels={labels}
            reset
            color="#609FFF"
            timeRanges={sundayTimeRanges}
            setTimeRanges={setSundayTimeRanges}
          />
        </RangePickerContainer>
      </TextAndRangePickerContainer>
    </Container>
  );
};

export default TimeRangeSetting;

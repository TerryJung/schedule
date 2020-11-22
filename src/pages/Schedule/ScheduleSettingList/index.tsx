import React, { useState } from 'react';
import IconWithLabel from '../../../components/molecules/IconWithLabel';
import styled from 'styled-components';
import ScheduleList from './ScheduleList';
import { ScheduleListProps } from './ScheduleList';
import TimeSetting from './TimeSetting';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  height: 540px;
`;

const ContentsContainer = styled.div`
  display: flex;
`;

interface ScheduleSettingListProps extends ScheduleListProps {}

const Title = styled.div`
  border-bottom: 1px solid #dcdcdc;
  height: 30px;
  width: 100%;
`;

const ScheduleSettingList = ({
  scheduleList,
  setScheduleList,
  setSelectedScheduleIndex,
  selectedScheduleIndex,
  baseSchedule,
}: ScheduleSettingListProps) => {
  const chooseTime = ['1주 전', '2주 전', '3주 전', '4주 전'];

  const [timeSelected, setTimeSelected] = useState<number | null>(0);

  return (
    <Container>
      <Title>
        <IconWithLabel icon="FixPin" label="스케줄 설정" />
      </Title>
      <ContentsContainer>
        <ScheduleList
          scheduleList={scheduleList}
          setScheduleList={setScheduleList}
          setSelectedScheduleIndex={setSelectedScheduleIndex}
          selectedScheduleIndex={selectedScheduleIndex}
          baseSchedule={baseSchedule}
        />
        <TimeSetting
          chooseTime={chooseTime}
          timeSelected={timeSelected}
          setTimeSelected={setTimeSelected}
        />
      </ContentsContainer>
    </Container>
  );
};

export default ScheduleSettingList;

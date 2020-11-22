import React, { useState } from "react";
import styled from "styled-components";
import IconWithLabel from "../../../components/molecules/IconWithLabel";
import todayFormatted from "../../../utils/date";
import ScheduleList from "./ScheduleList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  height: 540px;
`;

const ContentsContainer = styled.div`
  display: flex;
`;

const ColorPickerContainer = styled.div`
  padding: 25px 10px;
`;

interface ScheduleSettingListProps {}

const Title = styled.div`
  border-bottom: 1px solid #dcdcdc;
  height: 30px;
  width: 100%;
`;

const ScheduleSettingList = ({}: ScheduleSettingListProps) => {
  console.log(todayFormatted());
  const baseSchedule = { start: todayFormatted() + "~", end: "종료일 없음" };

  const [scheduleList, setScheduleList] = useState([
    baseSchedule,
    baseSchedule,
    baseSchedule,
    baseSchedule,
  ]);
  const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(0);

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
      </ContentsContainer>
    </Container>
  );
};

export default ScheduleSettingList;

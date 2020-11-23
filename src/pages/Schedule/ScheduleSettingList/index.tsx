import React, { useState } from "react";
import IconWithLabel from "../../../components/molecules/IconWithLabel";
import styled from "styled-components";
import ScheduleList from "./ScheduleList";
import { ScheduleListProps } from "./ScheduleList";
import TimeSetting from "./TimeSetting";
import Button from "../../../components/atoms/Button";
import Text from "../../../components/atoms/Text/index";
import { TimeSettingProps } from "./TimeSetting";
import { TimeRangeSettingProps } from "./TimeRangeSetting";
import { OpenBookTimeProps } from "./OpenBookTime";

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

const ButtonsContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0px 20px 20px 20px;
`;

const CenterLine = styled.div`
  position: absolute;
  left: 269.05px;
  width: 1px;
  height: 250px;
  border-left: 1px solid #dcdcdc;
  top: -200px;
`;

const ScheduleSettingList = ({
  color,
  scheduleList,
  onChangeScheduleList,
  selectedScheduleIndex,
  onChangeSelectedScheduleIndex,
  baseSchedule,
  timeSelected,
  onChangeTimeSelected,
  chooseTime,
  timeRanges,
  onChangeTimeRanges,
  timeLabels,
}: ScheduleSettingListProps & OpenBookTimeProps & TimeRangeSettingProps) => {
  return (
    <Container>
      <Title>
        <IconWithLabel icon="FixPin" label="스케줄 설정" />
      </Title>
      <ContentsContainer>
        <ScheduleList
          scheduleList={scheduleList}
          onChangeScheduleList={onChangeScheduleList}
          onChangeSelectedScheduleIndex={onChangeSelectedScheduleIndex}
          selectedScheduleIndex={selectedScheduleIndex}
          baseSchedule={baseSchedule}
        />
        <TimeSetting
          chooseTime={chooseTime}
          timeSelected={timeSelected}
          onChangeTimeSelected={onChangeTimeSelected}
          timeRanges={timeRanges}
          onChangeTimeRanges={onChangeTimeRanges}
          timeLabels={timeLabels}
          color={color}
        />
      </ContentsContainer>
      <ButtonsContainer>
        <Button>
          <Text>취소</Text>
        </Button>
        <Button variant="floodFill" style={{ width: 100 }}>
          <Text color="white">저장</Text>
        </Button>
        <CenterLine />
      </ButtonsContainer>
    </Container>
  );
};

export default ScheduleSettingList;

import React from "react";
import styled from "styled-components";
import Icons from "../../../components/atoms/Icons";
import StyledIconWithText from "../../../components/molecules/StyledIconWithText/index";
import InputWithIcon from "../../../components/molecules/InputWithIcon";
import moment from "moment";

export interface ScheduleListProps {
  scheduleList: {
    start: string;
    end: string;
  }[];
  setScheduleList: React.Dispatch<
    React.SetStateAction<
      {
        start: string;
        end: string;
      }[]
    >
  >;
  selectedScheduleIndex: number;
  setSelectedScheduleIndex: React.Dispatch<React.SetStateAction<number>>;
  baseSchedule: {
    start: string;
    end: string;
  };
}

const Container = styled.div`
  width: 270px;
  height: 500px;
  box-sizing: border-box;
`;

interface StyledTextWithIconContainer {
  rightBorder: boolean;
}

const StyledTextWithIconContainer = styled.div<StyledTextWithIconContainer>`
  padding: 10px 20px;
  display: flex;
  align-content: center;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdcdc;
  border-right: ${({ rightBorder }) =>
    rightBorder ? "1px solid #dcdcdc" : undefined};
`;

const IconContainer = styled.div`
  padding: 3px 3px 0px 3px;
  cursor: pointer;
`;

interface StyledIconWithTextContainerProps {
  height: number;
}

const StyledIconWithTextContainer = styled.div<
  StyledIconWithTextContainerProps
>`
  padding: 10px 20px;
  border-right: 1px solid #dcdcdc;
  height: ${({ height }) => height}px;
`;

const ScheduleList = ({
  scheduleList,
  setScheduleList,
  setSelectedScheduleIndex,
  selectedScheduleIndex,
  baseSchedule,
}: ScheduleListProps) => {
  const maxSchedule = 8;

  const validatedDates = [true, true, true, true, true, true, true, true];

  const handleAddSchedule = () => {
    if (scheduleList.length !== maxSchedule) {
      setScheduleList([...scheduleList, baseSchedule]);
    }
  };

  const handleListSelect = (index: number) => {
    setSelectedScheduleIndex(index);
  };

  const handleInputValue = ({
    start,
    end,
  }: {
    start: string;
    end: string;
  }): string => {
    return start + end;
  };

  const handleInput = (index: number, value: string) => {
    const start = value.slice(0, 11);
    const end = value.slice(11);

    setScheduleList([
      ...scheduleList.slice(0, index),
      { start, end },
      ...scheduleList.slice(index + 1),
    ]);
  };

  const validateInput = () => {
    for (let i = 0; i < scheduleList.length; i++) {
      const start = scheduleList[i].start.slice(0, 10);
      const startDate = moment(start);
      const end = scheduleList[i].end;
      const endDate = moment(end);
      if (
        !startDate.isValid() ||
        (!endDate.isValid() && end !== "종료일 없음")
      ) {
        validatedDates[i] = false;
      }
      for (let j = 0; j < i; j++) {
        const iStartValue = Date.parse(start);
        const iEndValue = Date.parse(
          end === "종료일 없음" ? "9999-12-31" : end
        );
        const jStartValue = Date.parse(scheduleList[j].start.slice(0, 10));
        const jEndValue = Date.parse(
          scheduleList[j].end === "종료일 없음"
            ? "9999-12-31"
            : scheduleList[j].end
        );
        if (
          (iStartValue >= jStartValue && iStartValue <= jEndValue) ||
          (iEndValue >= jStartValue && iEndValue <= jEndValue)
        ) {
          validatedDates[i] = false;
          validatedDates[j] = false;
        }
      }
    }
  };
  validateInput();

  return (
    <Container>
      {scheduleList.map(({ start, end }, index) => (
        <StyledTextWithIconContainer
          rightBorder={selectedScheduleIndex !== index}
          key={index.toString()}
        >
          <InputWithIcon
            style={!validatedDates[index] ? { color: "red" } : undefined}
            iconName="Calendar"
            iconColor="#999999"
            width={200}
            value={handleInputValue({ start, end })}
            onChange={(e) => handleInput(index, e.target.value)}
          />
          <IconContainer onClick={() => handleListSelect(index)}>
            <Icons name="LineArrowRight" size={24} color="#999999" />
          </IconContainer>
        </StyledTextWithIconContainer>
      ))}
      <StyledIconWithTextContainer height={450 - scheduleList.length * 50}>
        <StyledIconWithText
          iconName="Calendar"
          iconColor="#999999"
          width={230}
          style={{ color: "#999999" }}
          onClick={handleAddSchedule}
        >
          {scheduleList.length === maxSchedule
            ? "스케줄 추가 안됨"
            : "다음 스케줄 추가"}
        </StyledIconWithText>
      </StyledIconWithTextContainer>
    </Container>
  );
};

export default ScheduleList;

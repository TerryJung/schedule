import React from "react";
import styled from "styled-components";
import Icons from "../../../components/atoms/Icons";
import StyledTextWithIcon from "../../../components/molecules/StyledTextWithIcon/index";
import StyledIconWithText from "../../../components/molecules/StyledIconWithText/index";

interface ScheduleListProps {
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

  const handleAddSchedule = () => {
    if (scheduleList.length !== maxSchedule) {
      setScheduleList([...scheduleList, baseSchedule]);
    }
  };

  const handleListSelect = (index: number) => {
    setSelectedScheduleIndex(index);
  };

  return (
    <Container>
      {scheduleList.map((schedule, index) => (
        <StyledTextWithIconContainer
          rightBorder={selectedScheduleIndex !== index}
        >
          <StyledTextWithIcon
            iconName="Calendar"
            iconColor="#999999"
            width={200}
            key={schedule.start + schedule.end}
          >
            {`${schedule.start}~${schedule.end}`}
          </StyledTextWithIcon>
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

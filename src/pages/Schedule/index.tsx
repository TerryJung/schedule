import React, { useState } from "react";
import PaletteStyledModal from "../../components/molecules/PaletteStyledModal";
import GlobalSetting from "./GlobalSetting";
import ScheduleSettingList from "./ScheduleSettingList";
import todayFormatted from "../../utils/date";
import { iRange } from "../../components/molecules/RangePicker/index";
import styled from "styled-components";
import Text from "../../components/atoms/Text/index";
import Button from "../../components/atoms/Button";

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

const Schedule = () => {
  const baseSchedule = { start: todayFormatted() + "~", end: "종료일 없음" };
  const baseRange: iRange[] = [{ start: 0, end: 300 }];

  const colorPickerList = [
    { label: "블루", color: "#4C85DA" },
    { label: "그린", color: "#00ADA2" },
    { label: "옐로우", color: "#EEA51C" },
    { label: "레드", color: "#E76E63" },
    { label: "핑크", color: "#FFB2C9" },
    { label: "퍼플", color: "#CE66DF" },
    { label: "하늘", color: "#71CBF2" },
    { label: "연두", color: "#ADD639" },
    { label: "바이올렛", color: "#9874FF" },
  ];

  const chooseTime = ["1주 전", "2주 전", "3주 전", "4주 전"];

  const timeLabels = [
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];

  const [scheduleName, setScheduleNameChange] = useState("");
  const [colorSelected, setColorSelected] = useState<null | number>(null);

  const [scheduleList, setScheduleList] = useState([baseSchedule]);
  const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(0);
  const [timeSelected, setTimeSelected] = useState<(number | null)[]>([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const [timeRanges, setTimeRanges] = useState([
    [
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
    ],
    [
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
    ],
    [
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
    ],
    [
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
    ],
    [
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
    ],
    [
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
    ],
    [
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
      baseRange,
    ],
  ]);

  const transformationFromValueToTime = (value: number) => {
    const interval = 300 / 23;
    return Math.floor(value / interval);
  };

  const transformationFromRangeToConsole = (ranges: iRange[]) => {
    const transfomred = ranges.map(
      ({ start, end }) =>
        `${timeLabels[transformationFromValueToTime(start)]} 부터 ${
          timeLabels[transformationFromValueToTime(end)]
        } 까지`
    );
    return transfomred;
  };

  const result = scheduleList.map(
    (schedule, index) =>
      `${index}번째 스케줄 시작일: ${schedule.start} 종료일: ${
        schedule.end
      } 예약 오픈 시간: ${schedule.start}로부터 ${
        chooseTime[timeSelected[index] || 0]
      } 부터
      월:${transformationFromRangeToConsole(timeRanges[index][0])}
      화:${transformationFromRangeToConsole(timeRanges[index][1])}
      수:${transformationFromRangeToConsole(timeRanges[index][2])}
      목:${transformationFromRangeToConsole(timeRanges[index][3])}
      금:${transformationFromRangeToConsole(timeRanges[index][4])}
      토:${transformationFromRangeToConsole(timeRanges[index][5])}
      일:${transformationFromRangeToConsole(timeRanges[index][6])}
      `
  );

  console.log(
    `스케줄 이름 & 칼라: ${scheduleName}  ${
      colorSelected
        ? `${colorPickerList[colorSelected].color}(${colorPickerList[colorSelected].label})`
        : ""
    }`
  );

  console.log(result);

  return (
    <PaletteStyledModal
      width={760}
      height={700}
      titleIcon="AddCalendar"
      titleLabel="스케줄 설정"
    >
      <GlobalSetting
        scheduleName={scheduleName}
        onScheduleNameChange={(e) => setScheduleNameChange(e.target.value)}
        colorSelected={colorSelected}
        onChangeColorSelect={(value) => setColorSelected(value)}
        list={colorPickerList}
      />

      <ScheduleSettingList
        color={colorPickerList[colorSelected || 0].color}
        scheduleList={scheduleList}
        onChangeScheduleList={(value) => setScheduleList(value)}
        selectedScheduleIndex={selectedScheduleIndex}
        onChangeSelectedScheduleIndex={(value) =>
          setSelectedScheduleIndex(value)
        }
        timeSelected={timeSelected[selectedScheduleIndex]}
        onChangeTimeSelected={(value) =>
          setTimeSelected([
            ...timeSelected.slice(0, selectedScheduleIndex),
            value,
            ...timeSelected.slice(selectedScheduleIndex + 1),
          ])
        }
        baseSchedule={baseSchedule}
        chooseTime={chooseTime}
        timeRanges={timeRanges[selectedScheduleIndex]}
        onChangeTimeRanges={(value) =>
          setTimeRanges([
            ...timeRanges.slice(0, selectedScheduleIndex),
            value,
            ...timeRanges.slice(selectedScheduleIndex + 1),
          ])
        }
        timeLabels={timeLabels}
      />
      <ButtonsContainer>
        <Button onClick={() => alert("취소...")}>
          <Text>취소</Text>
        </Button>
        <Button
          variant="floodFill"
          style={{ width: 100 }}
          onClick={() => alert(result)}
        >
          <Text color="white">저장</Text>
        </Button>
        <CenterLine />
      </ButtonsContainer>
    </PaletteStyledModal>
  );
};

export default Schedule;

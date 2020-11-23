import React, { useState } from "react";
import PaletteStyledModal from "../../components/molecules/PaletteStyledModal";
import GlobalSetting from "./GlobalSetting";
import ScheduleSettingList from "./ScheduleSettingList";
import todayFormatted from "../../utils/date";
import ScheduleList from "./ScheduleSettingList/ScheduleList";

const Schedule = () => {
  const baseSchedule = { start: todayFormatted() + "~", end: "종료일 없음" };

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

  const [scheduleName, setScheduleNameChange] = useState("");
  const [colorSelected, setColorSelected] = useState<null | number>(null);

  const [scheduleList, setScheduleList] = useState([baseSchedule]);
  const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(0);

  const [openTime, setOpenTime] = useState<string[]>();

  console.log(
    `스케줄 이름 & 칼라: ${scheduleName}  ${
      colorSelected
        ? `${colorPickerList[colorSelected].color}(${colorPickerList[colorSelected].label})`
        : ""
    }`
  );

  console.log(scheduleList);
  console.log({ selectedScheduleIndex });
  console.log({ openTime });

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
        scheduleList={scheduleList}
        onChangeScheduleList={(value) => setScheduleList(value)}
        selectedScheduleIndex={selectedScheduleIndex}
        onChangeSelectedScheduleIndex={(value) =>
          setSelectedScheduleIndex(value)
        }
        baseSchedule={baseSchedule}
        // openTime={openTime}
        // setOpenTime={setOpenTime}
      />
    </PaletteStyledModal>
  );
};

export default Schedule;

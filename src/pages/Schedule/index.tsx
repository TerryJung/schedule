import React, { useState } from "react";
import styled from "styled-components";
import PaletteStyledModal from "../../components/molecules/PaletteStyledModal";
import GlobalSetting from "./GlobalSetting";
import ScheduleSettingList from "./ScheduleSettingList";

const Container = styled.div`
  background-color: #eaeaea;
  display: flex;
`;

const Schedule = () => {
  const [scheduleName, setScheduleNameChange] = useState("");
  const [colorSelected, setColorSelected] = useState<null | number>(null);

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
        setColorSelected={setColorSelected}
      />
      <ScheduleSettingList />
    </PaletteStyledModal>
  );
};

export default Schedule;

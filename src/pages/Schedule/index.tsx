import React, { useState } from 'react';
import PaletteStyledModal from '../../components/molecules/PaletteStyledModal';
import GlobalSetting from './GlobalSetting';
import ScheduleSettingList from './ScheduleSettingList';
import todayFormatted from '../../utils/date';

const Schedule = () => {
  const [scheduleName, setScheduleNameChange] = useState('');
  const [colorSelected, setColorSelected] = useState<null | number>(null);

  const baseSchedule = { start: todayFormatted() + '~', end: '종료일 없음' };

  const [scheduleList, setScheduleList] = useState([baseSchedule]);
  const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(0);

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
      <ScheduleSettingList
        scheduleList={scheduleList}
        setScheduleList={setScheduleList}
        setSelectedScheduleIndex={setSelectedScheduleIndex}
        selectedScheduleIndex={selectedScheduleIndex}
        baseSchedule={baseSchedule}
      />
    </PaletteStyledModal>
  );
};

export default Schedule;

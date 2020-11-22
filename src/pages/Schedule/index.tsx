import React from "react";
import styled from "styled-components";
import PaletteStyledModal from "../../components/molecules/PaletteStyledModal";

const Container = styled.div`
  background-color: #eaeaea;
  display: flex;
`;

const Schedule = () => {
  return (
    <PaletteStyledModal
      width={760}
      height={700}
      titleIcon="AddCalendar"
      titleLabel="스케줄 설정"
    ></PaletteStyledModal>
  );
};

export default Schedule;

import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import PaletteStyledModal from "../../components/molecules/PaletteStyledModal/index";

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesPaletteStyledModal = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - PaletteStyledModal
      </Label>
      <FlexRowContainer>
        <PaletteStyledModal width={100} height={100}></PaletteStyledModal>
        <PaletteStyledModal
          width={200}
          height={200}
          titleIcon="AddCalendar"
        ></PaletteStyledModal>
        <PaletteStyledModal width={200} height={400}></PaletteStyledModal>
        <PaletteStyledModal width={400} height={200}></PaletteStyledModal>
      </FlexRowContainer>
    </>
  );
};

export default MoleculesPaletteStyledModal;

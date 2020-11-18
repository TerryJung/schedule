import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import Dropdown from "../../components/molecules/Dropdown/index";
import DropdownHead from "../../components/molecules/Dropdown/DropdownHead";

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesDropDown = () => {
  const dropdownList = [
    "Text1",
    "Text2",
    "Text3",
    "Text4",
    "Text5",
    "Text6",
    "Text7",
    "Text8",
    "Text9",
  ];
  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - Dropdown
      </Label>
      <FlexRowContainer>
        <Dropdown width={150} list={dropdownList} />
        <Dropdown width={200} label="진료실" list={dropdownList} />
        <Dropdown width={200} label="진료실" disabled list={dropdownList} />
      </FlexRowContainer>
    </>
  );
};

export default MoleculesDropDown;

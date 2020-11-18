import React, { useState } from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import DropdownItemList from "../../components/molecules/DropdownItemList/index";

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesDropDownItemList = () => {
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
        Molecules - DropdownItemList
      </Label>
      <FlexRowContainer>
        <DropdownItemList width={150} texts={dropdownList} />
        <DropdownItemList width={200} texts={dropdownList} />
      </FlexRowContainer>
    </>
  );
};

export default MoleculesDropDownItemList;

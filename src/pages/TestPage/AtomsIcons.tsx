import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import Icons from "../../components/atoms/Icons/index";

const FlexRowContainer = styled.div`
  display: flex;
`;

const AtomsIcons = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Atoms - Icons
      </Label>

      <FlexRowContainer>
        <Icons name="AddCalendar" size={24} />
        <Icons name="Calendar" size={24} />
        <Icons name="Check" size={24} />
        <Icons name="Clear" size={24} />
        <Icons name="Clock" size={24} />
        <Icons name="Close" size={24} />
        <Icons name="ColorPicker" size={24} />
        <Icons name="FixPin" size={24} />
        <Icons name="Information" size={24} />
        <Icons name="LineArrowDown" size={24} />
        <Icons name="LineArrowUp" size={24} />
        <Icons name="OpenFolder" size={24} />
      </FlexRowContainer>
      <FlexRowContainer>
        <Icons color="blue" name="AddCalendar" size={24} />
        <Icons color="blue" name="Calendar" size={24} />
        <Icons color="blue" name="Check" size={24} />
        <Icons color="blue" name="Clear" size={24} />
        <Icons color="blue" name="Clock" size={24} />
        <Icons color="blue" name="Close" size={24} />
        <Icons color="blue" name="ColorPicker" size={24} />
        <Icons color="blue" name="FixPin" size={24} />
        <Icons color="blue" name="Information" size={24} />
        <Icons color="blue" name="LineArrowDown" size={24} />
        <Icons color="blue" name="LineArrowUp" size={24} />
        <Icons color="blue" name="OpenFolder" size={24} />
      </FlexRowContainer>
      <FlexRowContainer>
        <Icons color="#FF5733" name="AddCalendar" size={72} />
        <Icons color="#FF5733" name="Calendar" size={72} />
        <Icons color="#FF5733" name="Check" size={72} />
        <Icons color="#FF5733" name="Clear" size={72} />
        <Icons color="#FF5733" name="Clock" size={72} />
        <Icons color="#FF5733" name="Close" size={72} />
        <Icons color="#FF5733" name="ColorPicker" size={72} />
        <Icons color="#FF5733" name="FixPin" size={72} />
        <Icons color="#FF5733" name="Information" size={72} />
        <Icons color="#FF5733" name="LineArrowDown" size={72} />
        <Icons color="#FF5733" name="LineArrowUp" size={72} />
        <Icons color="#FF5733" name="OpenFolder" size={72} />
      </FlexRowContainer>
    </>
  );
};

export default AtomsIcons;

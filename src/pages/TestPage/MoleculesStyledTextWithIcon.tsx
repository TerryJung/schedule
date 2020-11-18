import React from "react";
import Label from "../../components/atoms/Label";
import styled from "styled-components";
import StyledTextWithIcon from "../../components/molecules/StyledTextWithIcon";

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesStyledTextWithIcon = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - StyledTextWithIcon
      </Label>
      <FlexRowContainer>
        <StyledTextWithIcon iconName="Calendar" iconColor="blue" width={150}>
          BasicText
        </StyledTextWithIcon>
        <StyledTextWithIcon
          iconName="AddCalendar"
          iconColor="yellow"
          width={150}
        >
          BasicTextLength1
        </StyledTextWithIcon>
        <StyledTextWithIcon iconName="Clear" iconColor="#abcd12" width={180}>
          BasicTextLength2
        </StyledTextWithIcon>
      </FlexRowContainer>
      <FlexRowContainer>
        <StyledTextWithIcon iconName="Calendar" iconColor="blue" width={150}>
          Long Text - alkdjflkasdjfakldsjfklasdjfalsd
        </StyledTextWithIcon>
        <StyledTextWithIcon
          iconName="AddCalendar"
          iconColor="yellow"
          width={150}
        >
          BasicText
        </StyledTextWithIcon>
        <StyledTextWithIcon iconName="Clear" iconColor="#abcd12" width={180}>
          BasicText
        </StyledTextWithIcon>
      </FlexRowContainer>
    </>
  );
};

export default MoleculesStyledTextWithIcon;

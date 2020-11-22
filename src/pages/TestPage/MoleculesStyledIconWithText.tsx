import React from "react";
import Label from "../../components/atoms/Label";
import styled from "styled-components";
import StyledIconWithText from "../../components/molecules/StyledIconWithText";

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesStyledIconWithText = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - StyledIconWithText
      </Label>
      <FlexRowContainer>
        <StyledIconWithText iconName="Calendar" iconColor="blue" width={150}>
          BasicText
        </StyledIconWithText>
        <StyledIconWithText
          iconName="AddCalendar"
          iconColor="yellow"
          width={150}
        >
          BasicTextLength1
        </StyledIconWithText>
        <StyledIconWithText iconName="Clear" iconColor="#abcd12" width={180}>
          BasicTextLength2
        </StyledIconWithText>
      </FlexRowContainer>
      <FlexRowContainer>
        <StyledIconWithText iconName="Calendar" iconColor="blue" width={150}>
          Long Text - alkdjflkasdjfakldsjfklasdjfalsd
        </StyledIconWithText>
        <StyledIconWithText
          iconName="AddCalendar"
          iconColor="yellow"
          width={150}
        >
          BasicText
        </StyledIconWithText>
        <StyledIconWithText iconName="Clear" iconColor="#abcd12" width={180}>
          BasicText
        </StyledIconWithText>
      </FlexRowContainer>
    </>
  );
};

export default MoleculesStyledIconWithText;

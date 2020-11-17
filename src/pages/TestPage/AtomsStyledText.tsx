import React from "react";
import StyledText from "../../components/atoms/StyledText/index";
import styled from "styled-components";
import Label from "../../components/atoms/Label";

const FlexRowContainer = styled.div`
  display: flex;
`;

const AtomsStyledText = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Atoms - StyledText
      </Label>

      <FlexRowContainer>
        <StyledText>Basic</StyledText>
        <StyledText>Basic2</StyledText>
        <StyledText>Basic3</StyledText>
      </FlexRowContainer>
      <FlexRowContainer>
        <StyledText size={10}>SizeVariation</StyledText>
        <StyledText size={20}>SizeVariation</StyledText>
        <StyledText size={30}>SizeVariation</StyledText>
        <StyledText size={40}>SizeVariation</StyledText>
      </FlexRowContainer>
      <FlexRowContainer>
        <StyledText color="red" size={10}>
          ColorVariation
        </StyledText>
        <StyledText color="blue" size={20}>
          ColorVariation
        </StyledText>
        <StyledText color="yellow" size={30}>
          ColorVariation
        </StyledText>
        <StyledText color="green" size={40}>
          ColorVariation
        </StyledText>
      </FlexRowContainer>
      <FlexRowContainer>
        <StyledText color="red" size={10} style={{ borderColor: "red" }}>
          ColorVariation
        </StyledText>
        <StyledText color="blue" size={20} style={{ borderColor: "green" }}>
          ColorVariation
        </StyledText>
        <StyledText color="yellow" size={30} style={{ borderColor: "pink" }}>
          ColorVariation
        </StyledText>
        <StyledText color="green" size={40} style={{ borderColor: "blue" }}>
          ColorVariation
        </StyledText>
      </FlexRowContainer>
    </>
  );
};

export default AtomsStyledText;

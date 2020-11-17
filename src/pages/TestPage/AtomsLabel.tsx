import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";

const FlexRowContainer = styled.div`
  display: flex;
`;

const AtomsLabel = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Atoms - Label
      </Label>

      <FlexRowContainer>
        <Label>Basic</Label>
        <Label>Basic2</Label>
        <Label>Basic3</Label>
      </FlexRowContainer>
      <FlexRowContainer>
        <Label size={10}>SizeVariation</Label>
        <Label size={20}>SizeVariation</Label>
        <Label size={30}>SizeVariation</Label>
        <Label size={40}>SizeVariation</Label>
      </FlexRowContainer>
      <FlexRowContainer>
        <Label color="red" size={10}>
          ColorVariation
        </Label>
        <Label color="blue" size={20}>
          ColorVariation
        </Label>
        <Label color="yellow" size={30}>
          ColorVariation
        </Label>
        <Label color="green" size={40}>
          ColorVariation
        </Label>
      </FlexRowContainer>
    </>
  );
};

export default AtomsLabel;

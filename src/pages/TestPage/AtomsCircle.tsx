import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import Circle from "../../components/atoms/Circle";

const FlexRowContainer = styled.div`
  display: flex;
`;

const AtomsCircle = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Atoms - Circle
      </Label>
      <FlexRowContainer>
        <Circle color="black" />
        <Circle color="#4C85DA" />
        <Circle color="#00ADA2" />
        <Circle color="#EEA51C" />
        <Circle color="#E76E63" />
        <Circle color="#FFB2C9" />
        <Circle color="#CE66DF" />
        <Circle color="#71CBF2" />
        <Circle color="#ADD639" />
        <Circle color="#9874FF" />
        <div style={{ width: 32 }} />
        <Circle color="#9874FF" hover />
        <div style={{ width: 32 }} />
        <Circle color="#ADD639" hover />
        <div style={{ width: 32 }} />
        <Circle color="#71CBF2" hover />
        <div style={{ width: 32 }} />
        <Circle color="#CE66DF" hover />
      </FlexRowContainer>
    </>
  );
};
export default AtomsCircle;

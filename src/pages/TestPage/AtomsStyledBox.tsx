import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import StyledBox from "../../components/atoms/StyledBox/index";

const FlexRowContainer = styled.div`
  display: flex;
`;

const AtomsStyledBox = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Atoms - StyledBox
      </Label>
      <FlexRowContainer>
        <StyledBox width={100} height={100}></StyledBox>
        <StyledBox width={200} height={200}></StyledBox>
        <StyledBox width={200} height={400}></StyledBox>
        <StyledBox width={400} height={200}></StyledBox>
      </FlexRowContainer>
    </>
  );
};

export default AtomsStyledBox;

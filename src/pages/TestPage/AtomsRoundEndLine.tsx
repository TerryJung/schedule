import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import RoundEndLine from "../../components/atoms/RoundEndLine/index";

const FlexRowContainer = styled.div`
  display: flex;
`;

const AtomsRoundEndLine = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Atoms - RoundEndLine
      </Label>

      <FlexRowContainer>
        <RoundEndLine
          left={0}
          right={100}
          leftMargin={0}
          rightMargin={200}
          interval={50}
        />
      </FlexRowContainer>
    </>
  );
};

export default AtomsRoundEndLine;

import React from "react";
import styled from "styled-components";
import Atoms from "./Atoms";
import Molecules from "./Molecules";

const FlexBasicContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestPage = () => {
  return (
    <FlexBasicContainer>
      <Atoms />
      <Molecules />
    </FlexBasicContainer>
  );
};

export default TestPage;

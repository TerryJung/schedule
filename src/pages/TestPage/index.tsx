import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import Icons from "../../components/atoms/Icons";
import Button from "../../components/atoms/Button/index";
import Text from "../../components/atoms/Text/index";
import { ButtonVariant } from "../../components/atoms/Button/index";
import Atoms from "./Atoms";

const FlexBasicContainer = styled.div``;

const TestPage = () => {
  return (
    <FlexBasicContainer>
      <Atoms />
    </FlexBasicContainer>
  );
};

export default TestPage;

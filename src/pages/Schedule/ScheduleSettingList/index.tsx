import React, { useState } from "react";
import styled from "styled-components";
import IconWithLabel from "../../../components/molecules/IconWithLabel";

const Container = styled.div`
  display: flex;
  padding: 10px 0px;
  height: 540px;
`;

const ColorPickerContainer = styled.div`
  padding: 25px 10px;
`;

interface ScheduleSettingListProps {}

const Title = styled.div`
  border-bottom: 1px solid #dcdcdc;
  height: 30px;
  width: 100%;
`;

const ScheduleSettingList = ({}: ScheduleSettingListProps) => {
  return (
    <Container>
      <Title>
        <IconWithLabel icon="FixPin" label="스케줄 설정" />
      </Title>
    </Container>
  );
};

export default ScheduleSettingList;

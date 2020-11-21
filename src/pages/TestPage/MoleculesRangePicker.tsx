import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import RangePicker from "../../components/molecules/RangePicker/index";

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesRangePicker = () => {
  const labels = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
  ];
  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - RangePicker
      </Label>
      <div style={{ height: 10 }}></div>
      <FlexRowContainer>
        <RangePicker width={150} number={10} labels={labels} />
        <div style={{ width: 20 }}></div>
        <RangePicker width={150} number={10} />
      </FlexRowContainer>
      <div style={{ height: 10 }}></div>
    </>
  );
};

export default MoleculesRangePicker;

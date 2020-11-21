import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import RangePicker from "../../components/molecules/RangePicker/index";

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesRangePicker = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - RangePicker
      </Label>
      <div style={{ height: 10 }}></div>

      <FlexRowContainer>
        <RangePicker width={150} number={10} />
        <div style={{ width: 5 }}></div>
        {/* <RangePicker width={150} number={10} /> */}
      </FlexRowContainer>
      <div style={{ height: 10 }}></div>
    </>
  );
};

export default MoleculesRangePicker;

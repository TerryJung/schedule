import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import DropdownItem from "../../components/molecules/DropdownItem";

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoleculesDropdownItem = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - DropdownItem
      </Label>
      <FlexRowContainer>
        <DropdownItem text="test text" selected={false} width={100} />
        <DropdownItem text="test text Selected" selected width={100} />
        <DropdownItem text="text text long" selected={false} width={200} />
        <DropdownItem text="text text long Selected" selected width={200} />
      </FlexRowContainer>
    </>
  );
};

export default MoleculesDropdownItem;

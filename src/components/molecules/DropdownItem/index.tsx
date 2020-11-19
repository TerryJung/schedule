import React from "react";
import TextWithIcon from "../TextWithIcon";
import styled from "styled-components";

interface DropdownItemProps {
  text: string;
  selected: boolean;
  width: number;
  onClick?: () => void;
}

const Container = styled.div`
  :hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

const DropdownItem = ({
  text,
  selected,
  width,
  onClick,
}: DropdownItemProps) => {
  const Component = (
    <Container>
      <TextWithIcon iconColor="white" iconName="Check" width={width}>
        {text}
      </TextWithIcon>
    </Container>
  );

  const SelectedComponent = (
    <TextWithIcon
      style={{ color: "#609FFF" }}
      iconColor="#609FFF"
      iconName="Check"
      width={width}
    >
      {text}
    </TextWithIcon>
  );

  return (
    <div onClick={onClick}>{selected ? SelectedComponent : Component}</div>
  );
};

export default DropdownItem;

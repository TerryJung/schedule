import React from "react";
import TextWithIcon from "../TextWithIcon";
import styled from "styled-components";

interface DropdownItemProps {
  text: string;
  selected: boolean;
  keyboardSelected?: boolean;
  width: number;
  onClick?: () => void;
}

interface ContainerProps {
  selected: boolean;
  keyboardSelected: boolean;
}

const Container = styled.div<ContainerProps>`
  background: ${({ keyboardSelected }) =>
    keyboardSelected ? "rgba(96, 159, 255, 0.15)" : "white"};
  color: ${({ selected }) => (selected ? "#609FFF" : "black")};
  :hover {
    background: rgba(0, 0, 0, 0.03);
  }
  box-sizing: "border-box";
  width: 100%;
`;

const DropdownItem = ({
  text,
  selected,
  width,
  onClick,
  keyboardSelected = false,
}: DropdownItemProps) => {
  // const Component = (
  //   <Container selected={selected} keyboardSelected={keyboardSelected}>
  //     <TextWithIcon
  //       iconColor={selected ? "#609FFF" : "white"}
  //       iconName="Check"
  //       width={width}
  //     >
  //       {text}
  //     </TextWithIcon>
  //   </Container>
  // );

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
    <Container
      selected={selected}
      keyboardSelected={keyboardSelected}
      onClick={onClick}
    >
      <TextWithIcon
        iconColor={selected ? "#609FFF" : "white"}
        iconName={selected ? "Check" : null}
        width={width}
      >
        {text}
      </TextWithIcon>
    </Container>
  );
};

export default DropdownItem;

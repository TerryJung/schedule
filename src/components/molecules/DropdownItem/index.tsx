import React from "react";
import TextWithIcon from "../TextWithIcon";

interface DropdownItemProps {
  text: string;
  selected: boolean;
  width: number;
  onClick?: () => void;
}
const DropdownItem = ({
  text,
  selected,
  width,
  onClick,
}: DropdownItemProps) => {
  const Component = (
    <TextWithIcon iconColor="white" iconName="Check" width={width}>
      {text}
    </TextWithIcon>
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

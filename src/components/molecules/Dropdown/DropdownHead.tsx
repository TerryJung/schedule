import React from "react";
import Label from "../../atoms/Label";
import StyledTextWithIcon from "../StyledTextWithIcon";

interface DropdownHeadProps {
  text?: string;
  width: number;
  placeholder?: string;
  label?: string;
}

const DropdownHead = ({
  text,
  width,
  label,
  placeholder,
}: DropdownHeadProps) => {
  return (
    <>
      {label && <Label color="#999999">{label}</Label>}
      <StyledTextWithIcon
        width={width}
        iconName="LineArrowDown"
        iconColor="#999999"
      >
        {text || placeholder || ""}
      </StyledTextWithIcon>
    </>
  );
};

export default DropdownHead;

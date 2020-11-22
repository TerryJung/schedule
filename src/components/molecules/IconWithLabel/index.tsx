import React from "react";
import Icons, { iconList } from "../../atoms/Icons/index";
import styled from "styled-components";
import Label from "../../atoms/Label";

interface IconWithLabelProps {
  icon: keyof typeof iconList;
  label: string;
  iconColor?: string;
}

const IconContainer = styled.div`
  padding: 3px 2.5px 3px 0px;
`;

const LabelContainer = styled.div`
  padding: 4.5px 0px;
`;

const IconWithLabel = ({ icon, label, iconColor }: IconWithLabelProps) => {
  return (
    <div style={{ flexDirection: "row", display: "flex", marginLeft: 4 }}>
      <IconContainer>
        <Icons name={icon} color={iconColor || "#999999"} size={24} />
      </IconContainer>
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
    </div>
  );
};

export default IconWithLabel;

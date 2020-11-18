import React, { useRef, useState } from "react";
import Icons from "../../atoms/Icons/index";
import styled from "styled-components";
import StyledText from "../../atoms/StyledText/index";
import Label from "../../atoms/Label";
import useClickOutsideComponet from "../../../hooks/useClickOutsideComponet";
import useKeyDown from "../../../hooks/useKeyDown";
import TextWithIcon from "../TextWithIcon";

interface DropdownHeadProps {
  text?: string;
  width: number;
  placeholder?: string;
}

const Controler = styled.div`
  display: inline-block;
`;

const Container = styled.div`
  position: absolute;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 5px;
`;

const EmptySpace = styled.div`
  height: 30px;
`;

const DropdownHead = ({
  text,
  width,
  placeholder,
  ...props
}: DropdownHeadProps) => {
  const [toggled, setToggled] = useState(false);

  const wrapperRef = useRef(null);

  useClickOutsideComponet(wrapperRef, () => setToggled(false));
  useKeyDown(27, () => setToggled(false));

  console.log(toggled);

  // const handleToggleOn = () => {
  //   if (!disabled) setToggled(true);
  // };

  return (
    <>
      <Container>
        <TextWithIcon
          width={width}
          iconName="LineArrowDown"
          iconColor="#999999"
        >
          {text || placeholder || ""}
        </TextWithIcon>
        <StyledText style={{ textAlign: "left", paddingRight: 19 }}>
          진료실1ㅁㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ
        </StyledText>
        <IconContainer>
          <Icons name="LineArrowDown" size={24} />
        </IconContainer>
      </Container>
      <EmptySpace />
    </>
  );
};

export default DropdownHead;

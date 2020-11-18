import React, { useRef, useState } from "react";
import Icons from "../../atoms/Icons/index";
import styled from "styled-components";
import StyledText from "../../atoms/StyledText/index";
import Label from "../../atoms/Label";
import Text from "../../atoms/Text/index";
import useClickOutsideComponet from "../../../hooks/useClickOutsideComponet";
import useKeyDown from "../../../hooks/useKeyDown";
import DropdownHead from "./DropdownHead";
import DropdownItemList from "../DropdownItemList/index";

interface DropdownProps {
  disabled?: boolean;
  width: number;
  list: string[];
  label?: string;
}

const Controler = styled.div``;

interface ContainerProps {
  disabled?: boolean;
}
const Container = styled.div<ContainerProps>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const Dropdown = ({ label, disabled, width, list }: DropdownProps) => {
  const [toggled, setToggled] = useState(false);

  const wrapperRef = useRef(null);

  useClickOutsideComponet(wrapperRef, () => setToggled(false));
  useKeyDown(27, () => setToggled(false));

  console.log(toggled);

  const handleToggleOn = () => {
    if (!disabled) setToggled(true);
  };

  return (
    <div>
      {label && <Label color="#999999">{label}</Label>}
      <Controler onClick={handleToggleOn} ref={wrapperRef}>
        <Container disabled={disabled}>
          <DropdownHead width={width} />
        </Container>
        {toggled && <DropdownItemList list={list} width={width} />}
      </Controler>
    </div>
  );
};

export default Dropdown;

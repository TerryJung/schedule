import React, { useRef, useState } from "react";
import styled from "styled-components";
import Label from "../../atoms/Label";
import useClickOutsideComponet from "../../../hooks/useClickOutsideComponet";
import useKeyDown from "../../../hooks/useKeyDown";
import ColorPickerHead from "./ColorPickerHead";
import ColorPickerItemList, {
  ColorPickerItemListProps,
} from "../ColorPickerItemList";

interface ColorPickerProps extends ColorPickerItemListProps {
  disabled?: boolean;
  label?: string;
  placeholder?: string;
}

const Controler = styled.div`
  z-index: 6;
`;

interface ContainerProps {
  disabled?: boolean;
}

const Container = styled.div<ContainerProps>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  z-index: 6;
`;

interface ItemListContainerProps {
  width: number;
}

const ItemListContainer = styled.div<ItemListContainerProps>`
  position: relative;
  top: -30px;
  z-index: 6;
`;

const ColorPicker = ({
  label,
  disabled,
  width,
  list,
  selected,
  onChangeSelect,
}: ColorPickerProps) => {
  const [toggled, setToggled] = useState(false);

  const wrapperRef = useRef(null);

  useClickOutsideComponet(wrapperRef, () => setToggled(false));
  useKeyDown(27, () => setToggled(false));

  const handleToggleOn = () => {
    if (!disabled) setToggled(true);
  };

  return (
    <div>
      {label && <Label color="#999999">{label}</Label>}
      <Controler onClick={handleToggleOn} ref={wrapperRef}>
        <Container disabled={disabled}>
          <ColorPickerHead
            color={selected !== null ? list[selected].color : undefined}
          />
        </Container>
        {toggled && (
          <Container>
            <ItemListContainer width={width}>
              <ColorPickerItemList
                list={list}
                width={width}
                selected={selected}
                onChangeSelect={onChangeSelect}
              />
            </ItemListContainer>
          </Container>
        )}
      </Controler>
    </div>
  );
};

export default ColorPicker;

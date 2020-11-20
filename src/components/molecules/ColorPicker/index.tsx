import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import useClickOutsideComponet from '../../../hooks/useClickOutsideComponet';
import useKeyDown from '../../../hooks/useKeyDown';
import ColorPickerHead from './ColorPickerHead';
import ColorPickerItemList, {
  ColorPickerItemListProps,
} from '../ColorPickerItemList';

export enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
  Overlap = 'Overlap',
}

interface ColorPickerProps extends ColorPickerItemListProps {
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  direction?: Direction | keyof typeof Direction;
}

const Controler = styled.div``;

interface ContainerProps {
  disabled?: boolean;
}

const Container = styled.div<ContainerProps>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const styleByDirection = {
  [Direction.Down]: () => 'top: -2px;',
  [Direction.Up]: () => 'top: -208px;',
  [Direction.Overlap]: () => 'top: -30px;',
  [Direction.Left]: ({ width }: { width: number }) =>
    `left: -${width - 2}px; top: -30px;`,
  [Direction.Right]: ({ width }: { width: number }) =>
    `left: ${width - 2}px; top: -30px;`,
};

interface ItemListContainerProps {
  width: number;
  direction: Direction | keyof typeof Direction;
}

const ItemListContainer = styled.div<ItemListContainerProps>`
  position: relative;
  ${({ direction, width }) => styleByDirection[direction]({ width })}
`;

const ColorPicker = ({
  label,
  disabled,
  width,
  list,
  selected,
  setSelected,
  direction = Direction.Down,
}: ColorPickerProps) => {
  const [toggled, setToggled] = useState(false);

  const wrapperRef = useRef(null);

  useClickOutsideComponet(wrapperRef, () => setToggled(false));
  useKeyDown(27, () => setToggled(false));

  const handleToggleOn = () => {
    if (!disabled) setToggled(true);
  };

  console.log(selected);

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
          <ItemListContainer direction={direction} width={width}>
            <ColorPickerItemList
              list={list}
              width={width}
              selected={selected}
              setSelected={setSelected}
            />
          </ItemListContainer>
        )}
      </Controler>
    </div>
  );
};

export default ColorPicker;

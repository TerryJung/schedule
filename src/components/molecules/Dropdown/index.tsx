import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import useClickOutsideComponet from '../../../hooks/useClickOutsideComponet';
import useKeyDown from '../../../hooks/useKeyDown';
import DropdownHead from './DropdownHead';
import DropdownItemList, { DropdownItemListProps } from '../DropdownItemList';

export enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
  Overlap = 'Overlap',
}
interface DropdownProps extends DropdownItemListProps {
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

const Dropdown = ({
  label,
  disabled,
  width,
  list,
  placeholder,
  autoSelect,
  selected,
  setSelected,
  direction = Direction.Down,
}: DropdownProps) => {
  const [toggled, setToggled] = useState(false);

  const wrapperRef = useRef(null);

  useClickOutsideComponet(wrapperRef, () => setToggled(false));
  useKeyDown(27, () => setToggled(false));

  const handleToggleOn = () => {
    if (!disabled) setToggled(true);
  };

  return (
    <div style={{ zIndex: 10000, position: 'relative' }}>
      {label && <Label color="#999999">{label}</Label>}
      <Controler onClick={handleToggleOn} ref={wrapperRef}>
        <Container disabled={disabled}>
          <DropdownHead
            width={width}
            placeholder={placeholder}
            text={selected !== null ? list[selected] : undefined}
          />
        </Container>
        {toggled && (
          <ItemListContainer direction={direction} width={width}>
            <DropdownItemList
              list={list}
              width={width}
              selected={selected}
              setSelected={setSelected}
              autoSelect={autoSelect}
            />
          </ItemListContainer>
        )}
      </Controler>
    </div>
  );
};

export default Dropdown;

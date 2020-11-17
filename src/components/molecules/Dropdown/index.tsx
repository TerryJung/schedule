import React, { useRef, useState } from 'react';
import Icons from '../../atoms/Icons/index';
import styled from 'styled-components';
import StyledText from '../../atoms/StyledText/index';
import Label from '../../atoms/Label';
import Text from '../../atoms/Text/index';
import useClickOutsideComponet from '../../../hooks/useClickOutsideComponet';

interface DropdownProps {
  labelText?: string;
  disabled?: boolean;
}

const Controler = styled.div`
  display: inline-block;
`;

const Container = styled.div<DropdownProps>`
  position: absolute;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const IconContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 5px;
`;

const EmptySpace = styled.div`
  height: 30px;
`;

const Dropdown = ({ labelText, disabled, ...props }: DropdownProps) => {
  const [toggled, setToggled] = useState(false);

  const wrapperRef = useRef(null);

  useClickOutsideComponet(wrapperRef, () => setToggled(false));
  // useKeyPress()

  console.log(toggled);

  const handleToggleOn = () => {
    if (!disabled) setToggled(true);
  };

  return (
    <>
      {labelText && <Label color="#999999">{labelText}</Label>}
      <Controler onClick={handleToggleOn} ref={wrapperRef}>
        <Container disabled={disabled}>
          <StyledText style={{ textAlign: 'left', paddingRight: 19 }}>
            진료실1ㅁㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ
          </StyledText>
          <IconContainer>
            <Icons name="LineArrowDown" size={24} />
          </IconContainer>
        </Container>
        <EmptySpace />
        {toggled && (
          <div className="content">
            <Text>haha</Text>
            <Text>haha</Text>
            <Text>haha</Text>
          </div>
        )}
      </Controler>
    </>
  );
};

export default Dropdown;

import React, { useState } from 'react';
import Input, { InputProps } from '../../atoms/Input';
import Icons, { iconList } from '../../atoms/Icons/index';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: absolute;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 5px;
`;

interface EmptySpaceProps {
  width: number;
}

const EmptySpace = styled.div<EmptySpaceProps>`
  height: 30px;
  width: ${({ width }) => width}px;
`;

interface InputWithIconProps extends InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconName: keyof typeof iconList;
  iconColor?: string;
  width: number;
}

const InputWithIcon = ({
  value,
  onChange,
  style,
  iconName,
  iconColor,
  width,
  ...props
}: InputWithIconProps) => {
  const [hover, setHover] = useState(false);
  const hoverColor = '#609FFF';

  return (
    <Wrapper>
      <Container
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Input
          value={value}
          onChange={onChange}
          style={{
            ...style,
            width,
            paddingRight: 29,
            borderColor: hover ? hoverColor : undefined,
          }}
          {...props}
        />
        <IconContainer>
          <Icons
            name={iconName}
            color={hover ? hoverColor : iconColor}
            size={24}
          />
        </IconContainer>
      </Container>
      <EmptySpace width={width} />
    </Wrapper>
  );
};

export default InputWithIcon;

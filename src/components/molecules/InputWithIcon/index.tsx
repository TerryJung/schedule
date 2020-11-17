import React, { useState } from 'react';
import Input, { InputProps } from '../../atoms/Input';
import Icons, { iconList } from '../../atoms/Icons/index';
import styled from 'styled-components';

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

interface InputWithIconProps extends InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconName: keyof typeof iconList;
  iconColor?: string;
}

const InputWithIcon = ({
  value,
  onChange,
  style,
  iconName,
  iconColor,
  ...props
}: InputWithIconProps) => {
  const [hover, setHover] = useState(false);
  const hoverColor = '#609FFF';

  return (
    <div>
      <Container
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Input
          value={value}
          onChange={onChange}
          style={{
            ...style,
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
      <EmptySpace />
    </div>
  );
};

export default InputWithIcon;

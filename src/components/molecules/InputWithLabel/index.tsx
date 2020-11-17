import React from 'react';
import styled from 'styled-components';
import Input, { InputProps } from '../../atoms/Input/index';
import Label from '../../atoms/Label';

interface InputWithLabelProps extends InputProps {
  labelText: string;
}

const InputWithLabel = ({
  labelText,
  value,
  onChange,
  ...props
}: InputWithLabelProps) => {
  return (
    <div>
      <Label color="#999999">{labelText}</Label>
      <Input value={value} onChange={onChange} {...props} />
    </div>
  );
};

export default InputWithLabel;

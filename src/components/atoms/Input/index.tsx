import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  overflow: visible;
`;

const DefaultInput = styled.input<InputProps>`
  height: 30px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;

  :focus {
    border: 1px solid #609fff;
    outline: none;
  }

  ::placeholder {
    color: #dcdcdc;
  }

  font-family: 'Spoqa Han Sans Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
`;

// }

const Input = ({ value, onChange, disabled, ...props }: InputProps) => {
  return (
    <Container>
      <form>
        <DefaultInput
          type="text"
          value={!disabled ? value : ''}
          onChange={!disabled ? onChange : () => null}
          {...props}
        />
      </form>
    </Container>
  );
};

export default Input;

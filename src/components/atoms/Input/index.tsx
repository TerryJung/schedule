import React from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: visible;
`;

const DefaultInput = styled.input`
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
    color: #DCDCDC;
  }

  font-family: "Spoqa Han Sans Regular";
  font-style: normal
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`;

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <Container>
      <form>
        <DefaultInput
          type="text"
          placeholder="aasdf"
          value={value}
          onChange={onChange}
        />
      </form>
    </Container>
  );
};

export default Input;

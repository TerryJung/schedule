import React from "react";
import styled from "styled-components";

const Container = styled.div``;

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

  font-family: "Spoqa Han Sans Regular";
  font-style: normal
  font-weight: normal;
  font-size: 30px;
  line-height: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`;

function Input() {
  return (
    <Container>
      <form>
        <DefaultInput type="text" />
      </form>
    </Container>
  );
}

export default Input;

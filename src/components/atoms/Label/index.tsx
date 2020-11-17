import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const StyledSpan = styled.input`
  height: 20px;

  font-family: 'Spoqa Han Sans Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 20px;
`;

export interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // hover?: boolean; // It is for color changing on hover
}

const Label = ({ children, ...props }: LabelProps) => {
  return (
    <Container>
      <StyledSpan>{children}</StyledSpan>
    </Container>
  );
};

export default Label;

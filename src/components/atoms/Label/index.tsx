import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const StyledSpan = styled.span`
  height: 20px;

  font-family: 'Spoqa Han Sans Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 20px;
  color: ${({ color }) => color};
`;

export interface LabelProps {
  children: string;
  color?: string;
}

const Label = ({ children, color = 'black' }: LabelProps) => {
  return (
    <Container>
      <StyledSpan color={color}>{children}</StyledSpan>
    </Container>
  );
};

export default Label;

import React from 'react';
import styled from 'styled-components';
import OpenBookTime from './OpenBookTime';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const TimeSetting = () => {
  return (
    <Container>
      <OpenBookTime />
    </Container>
  );
};

export default TimeSetting;

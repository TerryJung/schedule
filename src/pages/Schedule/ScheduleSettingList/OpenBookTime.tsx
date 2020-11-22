import React from 'react';
import styled from 'styled-components';
import IconWithLabel from '../../../components/molecules/IconWithLabel/index';

const Container = styled.div`
  box-sizing: border-box;
`;

const IconWithLabelContainer = styled.div`
  padding: 9px;
`;

const OpenBookTime = () => {
  return (
    <Container>
      <IconWithLabelContainer>
        <IconWithLabel
          iconColor="#999999"
          icon="OpenFolder"
          label="예약 오픈 시간"
        />
      </IconWithLabelContainer>
    </Container>
  );
};

export default OpenBookTime;

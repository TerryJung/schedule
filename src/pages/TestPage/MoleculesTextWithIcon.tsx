import React from 'react';
import Label from '../../components/atoms/Label/index';
import styled from 'styled-components';
import TextWithIcon from '../../components/molecules/TextWithIcon';

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesTextWithIcon = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - TextWithIcon
      </Label>
      <FlexRowContainer>
        <TextWithIcon iconName="Calendar" iconColor="blue" width={150}>
          BasicText
        </TextWithIcon>
        <TextWithIcon iconName="AddCalendar" iconColor="yellow" width={150}>
          BasicTextLength1
        </TextWithIcon>
        <TextWithIcon iconName="Clear" iconColor="#abcd12" width={180}>
          BasicTextLength2
        </TextWithIcon>
      </FlexRowContainer>
      <FlexRowContainer>
        <TextWithIcon iconName="Calendar" iconColor="blue" width={150}>
          Long Text - alkdjflkasdjfakldsjfklasdjfalsd
        </TextWithIcon>
        <TextWithIcon iconName="AddCalendar" iconColor="yellow" width={150}>
          BasicText
        </TextWithIcon>
        <TextWithIcon iconName="Clear" iconColor="#abcd12" width={180}>
          BasicText
        </TextWithIcon>
      </FlexRowContainer>
    </>
  );
};

export default MoleculesTextWithIcon;

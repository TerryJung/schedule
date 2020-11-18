import React from 'react';
import TextWithIcon from '../TextWithIcon';
import styled from 'styled-components';
interface DropdownItemListProps {
  width: number;
}
const Container = styled.div<DropdownItemListProps>`
  height: 180px;
  overflow: auto;
  width: ${({ width }) => width}px;
`;

const DropdownItemList = ({ width }: DropdownItemListProps) => {
  const list = [
    'test 1',
    'test 2',
    'test 3',
    'test 4',
    'test 5',
    'test 6',
    'test 7',
    'test 8',
  ];

  return (
    <Container width={width}>
      {list.map((text) => (
        <TextWithIcon iconName="Check" iconColor="black" width={width}>
          {text}
        </TextWithIcon>
      ))}
    </Container>
  );
};

export default DropdownItemList;

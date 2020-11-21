import React, { useState } from 'react';
import styled from 'styled-components';
import useMousePosition from '../../../hooks/useMousePosition';
import useMouseUp from '../../../hooks/useMouseUp';
import Circle from '../../atoms/Circle';

export interface RoundEndLineProps {
  labels?: string[];
  width: number;
  number: number;
  leftMargin: number;
  rightMargin: number;
  left: number;
  right: number;
  onLeftChange: (value: number) => void;
  onRightChange: (value: number) => void;
  color?: string;
}

const Container = styled.div`
  display: flex;
`;

interface ContentProps {
  left: number;
  right: number;
}

interface LineWithMarginProps {
  width: number;
  color: string;
  left: number;
}

const LineWithMargin = styled.div<LineWithMarginProps>`
  position: absolute;
  width: ${({ width }) => width}px;
  height: 2px;
  top: 2px;
  left: ${({ left }) => left}px;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
`;

interface CircleProps {
  left: number;
}

const CircleContainer = styled.div<CircleProps>`
  position: absolute;
  left: ${({ left }) => left}px;
`;

const SecondCircle = styled.div<ContentProps>`
  position: relative;
  height: 6px;
  width: 6px;
  top: -2px;
  left: ${({ left, right }) => right - left - 6}px;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: ${({ color }) => color};
  cursor: e-resize;
`;

const AbsoluteRoundEndLine = ({
  width,
  color = '#609FFF',
  leftMargin,
  rightMargin,
  left,
  right,
}: RoundEndLineProps) => {
  // const [start, setStart] = useState(left);
  const [startStatus, setStartStatus] = useState(false);
  // const [end, setEnd] = useState(right);
  const [endStatus, setEndStatus] = useState(false);
  const { x, y } = useMousePosition();
  useMouseUp(() => {
    setStartStatus(false);
  });

  console.log(startStatus);
  // console.log({ x, y });

  // console.log({ start, end });

  console.log({ left, right });
  return (
    <>
      <Container>
        <CircleContainer left={left}>
          <Circle size={6} color="#609FFF" hover />
        </CircleContainer>
        <CircleContainer left={right - 6}>
          <Circle size={6} color="#609FFF" hover />
        </CircleContainer>
        <LineWithMargin
          left={left + 5}
          width={right - left - 10}
          color={color}
        />

        {/* <FirstCircle
        left={start}
        right={end}
        color={color}
        onMouseDown={() => {
          setStartStatus(true);
        }}
        onMouseUp={() => {
          setStartStatus(false);
        }}
        onMouseMove={() => {
          console.log("onMouseMove");
        }}
        onDrag={() => {
          setStartStatus(true);
        }}
        onDragEnd={() => {
          setStartStatus(false);
        }}
      /> */}
        {/* <SecondCircle left={start} right={end} color={color} /> */}
      </Container>
    </>
  );
};

export default AbsoluteRoundEndLine;

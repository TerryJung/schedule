import React, { useState } from 'react';
import styled from 'styled-components';
import useMousePosition from '../../../hooks/useMousePosition';
import useMouseUp from '../../../hooks/useMouseUp';
import Circle from '../../atoms/Circle';
import { useEffect } from 'react';

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

const Container = styled.div``;

interface ContentProps {
  left: number;
  right: number;
}

interface LineProps {
  width: number;
  color: string;
  left: number;
}

const Line = styled.div<LineProps>`
  position: absolute;
  width: ${({ width }) => width}px;
  height: 2px;
  top: 2px;
  left: ${({ left }) => left}px;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
  z-index: 1;
`;

interface CircleProps {
  left: number;
  moving?: boolean;
}

const CircleContainer = styled.div<CircleProps>`
  position: absolute;
  left: ${({ left }) => left}px;
  cursor: ew-resize;
  z-index: 2;
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
  onLeftChange,
  onRightChange,
}: RoundEndLineProps) => {
  // const [start, setStart] = useState(left);
  const [leftStatus, setLeftStatus] = useState(false);
  // const [end, setEnd] = useState(right);
  const [endStatus, setEndStatus] = useState(false);
  const { x, y } = useMousePosition();
  useMouseUp(() => {
    setLeftStatus(false);
  });

  useEffect(() => {
    if (leftStatus) {
      onLeftChange(x || 0);
    }
  });

  console.log(leftStatus);

  return (
    <>
      <Container>
        <CircleContainer
          left={left}
          moving={leftStatus}
          onMouseDown={() => {
            setLeftStatus(true);
          }}
          onDrag={() => {
            setLeftStatus(true);
          }}
          onDragEnd={() => {
            setLeftStatus(false);
          }}
        >
          <Circle size={6} color="#609FFF" hover />
        </CircleContainer>
        <CircleContainer left={right - 6}>
          <Circle size={6} color="#609FFF" hover />
        </CircleContainer>
        <Line
          left={left + 5}
          width={right - left - 10}
          color={color}
          onMouseDown={() => setLeftStatus(true)}
        />

        {/* <FirstCircle
        left={start}
        right={end}
        color={color}

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

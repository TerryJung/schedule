import React, { useState } from "react";
import styled from "styled-components";
import useMousePosition from "../../../hooks/useMousePosition";
import useMouseUp from "../../../hooks/useMouseUp";
import Circle from "../Circle";

export interface RoundEndLineProps {
  left: number;
  right: number;
  leftMargin: number;
  rightMargin: number;
  interval: number;

  color?: string;
}

const Container = styled.div`
  display: flex;
  position: relative;
`;

interface ContentProps {
  left: number;
  right: number;
  color: string;
}

const Line = styled.div<ContentProps>`
  position: relative;
  width: ${({ left, right }) => right - left - 4}px;
  height: 2px;
  /* left: -7px; */
  top: 2px;
  /* margin-top: 2px; */
  margin-left: -1px;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
`;

const FirstCircle = styled.div<ContentProps>`
  position: relative;
  height: 6px;
  width: 6px;
  top: -2px;
  left: ${({ left }) => left};
  border-radius: 50%;
  box-sizing: border-box;
  background-color: ${({ color }) => color};
  cursor: w-resize;
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

const RoundEndLine = ({
  left,
  right,
  color = "#609FFF",
  leftMargin,
  rightMargin,
}: RoundEndLineProps) => {
  const [start, setStart] = useState(left);
  const [startStatus, setStartStatus] = useState(false);
  const [end, setEnd] = useState(right);
  const [endStatus, setEndStatus] = useState(false);
  const { x, y } = useMousePosition();
  useMouseUp(() => {
    setStartStatus(false);
  });

  console.log(startStatus);
  // console.log({ x, y });

  return (
    <Container>
      <Circle size={6} color="#609FFF" hover />
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
      <Line left={start} right={end} color={color} />
    </Container>
  );
};

export default RoundEndLine;

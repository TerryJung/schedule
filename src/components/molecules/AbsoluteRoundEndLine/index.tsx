import React, { useRef, useState } from "react";
import styled from "styled-components";
import useMousePosition from "../../../hooks/useMousePosition";
import useMouseUp from "../../../hooks/useMouseUp";
import Circle from "../../atoms/Circle";
import { useEffect } from "react";
import Label from "../../atoms/Label";
import useLeftOffset from "../../../hooks/useLeftOffset";

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

interface LabelContainerProps {
  left?: number;
  rightAlign?: boolean;
  secondLine?: boolean;
}
const LabelContainer = styled.div<LabelContainerProps>`
  position: absolute;
  top: ${({ secondLine }) => (secondLine ? 22 : 8)}px;
  left: ${({ left }) => left}px;
  width: 30px;
  text-align: ${({ rightAlign }) => (rightAlign ? "right" : undefined)};
`;

const AbsoluteRoundEndLine = ({
  color = "#609FFF",
  leftMargin,
  rightMargin,
  number,
  left,
  right,
  onLeftChange,
  onRightChange,
  labels,
}: RoundEndLineProps) => {
  const [leftStatus, setLeftStatus] = useState(false);
  const [rightStatus, setRightStatus] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftOffset = useLeftOffset(containerRef);

  const { x } = useMousePosition();
  const interval = (rightMargin - leftMargin) / number;
  const leftIndex = (left - leftMargin) / interval;
  const rightIndex = (right - leftMargin) / interval;

  useMouseUp(() => {
    setLeftStatus(false);
    setRightStatus(false);
  });

  useEffect(() => {
    onLeftChange(
      filteredValue({
        originalLeftMargin: leftMargin,
        originalRightMargin: rightMargin,
        number,
        leftMargin: leftMargin - interval,
        rightMargin: right,
        current: left,
      })
    );

    onRightChange(
      filteredValue({
        originalLeftMargin: leftMargin,
        originalRightMargin: rightMargin,
        number,
        leftMargin: left,
        rightMargin: rightMargin + interval,
        current: right,
      })
    );
  }, []);

  useEffect(() => {
    if (leftStatus && x) {
      let mouseLeftPosition = x - leftOffset - 3;

      onLeftChange(
        filteredValue({
          originalLeftMargin: leftMargin,
          originalRightMargin: rightMargin,
          number,
          leftMargin: leftMargin - interval,
          rightMargin: right,
          current: mouseLeftPosition,
        })
      );
    }

    if (rightStatus && x) {
      let mouseLeftPosition = x - leftOffset - 3;

      const interval = (rightMargin - leftMargin) / number;

      onRightChange(
        filteredValue({
          originalLeftMargin: leftMargin,
          originalRightMargin: rightMargin,
          number,
          leftMargin: left,
          rightMargin: rightMargin + interval,
          current: mouseLeftPosition,
        })
      );
    }
  });

  const filteredValue = ({
    originalLeftMargin,
    originalRightMargin,
    number,
    leftMargin,
    rightMargin,
    current,
  }: {
    originalLeftMargin: number;
    originalRightMargin: number;
    number: number;
    leftMargin: number;
    rightMargin: number;
    current: number;
  }) => {
    const interval = (originalRightMargin - originalLeftMargin) / number;
    let rangeFilterdValue =
      current < leftMargin + interval ? leftMargin + interval : current;
    rangeFilterdValue =
      rangeFilterdValue > rightMargin - interval
        ? rightMargin - interval
        : rangeFilterdValue;

    console.log(leftMargin, rightMargin, current);

    return (
      Math.round((rangeFilterdValue - originalLeftMargin) / interval) *
        interval +
      originalLeftMargin
    );
  };

  return (
    <>
      <Container ref={containerRef}>
        <CircleContainer
          left={left - 3}
          moving={leftStatus}
          onMouseDown={() => {
            setLeftStatus(true);
          }}
          onDragStart={(event) => event.preventDefault()}
        >
          <Circle size={6} color="#609FFF" hover alwaysHover={leftStatus} />
        </CircleContainer>
        <CircleContainer
          left={right - 3}
          moving={rightStatus}
          onMouseDown={() => {
            setRightStatus(true);
          }}
          onDragStart={(event) => event.preventDefault()}
        >
          <Circle size={6} color="#609FFF" hover />
        </CircleContainer>
        <Line
          left={left + 2}
          width={right - left - 4}
          color={color}
          onMouseDown={() => setLeftStatus(true)}
        />
        {labels && labels[leftIndex] && (
          <>
            <LabelContainer left={left - 3}>
              <Label size={11} noSelect color="#609FFF">
                {labels[leftIndex]}
              </Label>
            </LabelContainer>
            <div style={{ height: 16 }}></div>
          </>
        )}
        {labels && labels[rightIndex] && (
          <>
            <LabelContainer
              left={right - 27}
              rightAlign
              secondLine={right - left < 60}
            >
              <Label size={11} noSelect color="#609FFF">
                {labels[rightIndex]}
              </Label>
            </LabelContainer>
            <div style={{ height: right - left < 60 ? 32 : 16 }}></div>
          </>
        )}
      </Container>
    </>
  );
};

export default AbsoluteRoundEndLine;

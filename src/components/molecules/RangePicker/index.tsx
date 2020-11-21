import React, { useRef, useState } from "react";
import styled from "styled-components";
import AbsoluteRoundEndLine from "../AbsoluteRoundEndLine/index";
import useLeftOffset from "../../../hooks/useLeftOffset";

interface LineBackgroundProps {
  width: number;
}

const Container = styled.div`
  position: relative;
`;
const LineBackground = styled.div<LineBackgroundProps>`
  position: absolute;
  width: ${({ width }) => width}px;
  height: 2px;
  color: #eaeaea;
  top: 2px;
  border-radius: 5px;
  background-color: #dcdcdc;
`;

interface RangePickerProps {
  labels?: string[];
  width: number;
  number: number;
}

const RangePicker = ({ labels, width, number }: RangePickerProps) => {
  const [left, setLeft] = useState(50);
  const [right, setRight] = useState(100);
  const containerRef = useRef<HTMLDivElement | null>(null);
  // const [leftOffset, setLeftOffset] = useState(0);
  const leftOffset = useLeftOffset(containerRef);

  console.log({ leftOffset });

  return (
    <Container ref={containerRef}>
      <LineBackground width={width} />
      <AbsoluteRoundEndLine
        width={width}
        leftMargin={0}
        rightMargin={width}
        left={left}
        right={right}
        onLeftChange={(value) => setLeft(value)}
        onRightChange={(value) => setRight(value)}
        labels={labels}
        number={number}
      />
      <div style={{ width }}></div>
    </Container>
  );
};

export default RangePicker;

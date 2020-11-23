import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AbsoluteRoundEndLine from "../AbsoluteRoundEndLine/index";
import useLeftOffset from "../../../hooks/useLeftOffset";
import useMousePosition from "../../../hooks/useMousePosition";
import useTopOffset from "../../../hooks/useTopOffset";
import Icons from "../../atoms/Icons/index";

interface LineBackgroundProps {
  width: number;
}

const Container = styled.div`
  position: relative;
  display: flex;
`;

const IconContainer = styled.div`
  position: relative;
  top: -9px;
  left: 14px;
  cursor: pointer;
`;

export interface iRange {
  start: number;
  end: number;
}

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
  reset?: boolean;
  color: string;

  timeRanges: iRange[];
  onChangeTimeRanges: (value: iRange[]) => void;
}

const RangePicker = ({
  labels,
  width,
  number,
  reset,
  color,

  timeRanges,
  onChangeTimeRanges,
}: RangePickerProps) => {
  const base = [{ start: 0, end: width }];

  const [insertable, setInsertable] = useState(false);
  const interval = width / number;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftOffset = useLeftOffset(containerRef);
  const topOffset = useTopOffset(containerRef);
  const { x, y } = useMousePosition();
  const mouseLeftPosition = (x ? x : 0) - leftOffset - 3;
  const mouseTopPosition = (y ? y : 0) - topOffset - 3;
  const roundMouseLeftPosition =
    Math.round(mouseLeftPosition / interval) * interval;

  useEffect(() => {
    let inRange = false;

    if (
      roundMouseLeftPosition >= 0 &&
      roundMouseLeftPosition < width &&
      mouseTopPosition >= -12 &&
      mouseTopPosition <= 12
    ) {
      for (let i = 0; i < timeRanges.length; i++) {
        if (
          (roundMouseLeftPosition >= timeRanges[i].start &&
            roundMouseLeftPosition <= timeRanges[i].end) ||
          (roundMouseLeftPosition + interval >= timeRanges[i].start &&
            roundMouseLeftPosition + interval <= timeRanges[i].end)
        ) {
          inRange = true;
        }
      }
    } else {
      inRange = true;
    }
    if (inRange === insertable) {
      setInsertable(!inRange);
    }
  }, [roundMouseLeftPosition, insertable, mouseTopPosition, timeRanges]);

  const addNewLine = () => {
    if (insertable) {
      let index = timeRanges.length;

      for (let i = 0; i < timeRanges.length; i++) {
        if (roundMouseLeftPosition < timeRanges[i].start) {
          index = i;
        }
      }

      onChangeTimeRanges([
        ...timeRanges.slice(0, index),
        {
          start: roundMouseLeftPosition,
          end: roundMouseLeftPosition + interval,
        },
        ...timeRanges.slice(index),
      ]);
    }
  };

  const handleValueChange = (
    index: number,
    newValue: { start: number; end: number }
  ) => {
    onChangeTimeRanges([
      ...timeRanges.slice(0, index),
      newValue,
      ...timeRanges.slice(index + 1),
    ]);
  };

  const handleReset = () => onChangeTimeRanges(base);

  return (
    <Container ref={containerRef} onClick={addNewLine}>
      <LineBackground width={width} />
      {timeRanges.map((timeRange, index) => (
        <AbsoluteRoundEndLine
          width={width}
          leftMargin={index === 0 ? 0 : timeRanges[index - 1].end + interval}
          rightMargin={
            index === timeRanges.length - 1
              ? width
              : timeRanges[index + 1].start - interval
          }
          left={timeRange.start}
          right={timeRange.end}
          onLeftChange={(value) =>
            handleValueChange(index, { ...timeRange, start: value })
          }
          onRightChange={(value) =>
            handleValueChange(index, { ...timeRange, end: value })
          }
          labels={labels}
          number={number}
          color={color}
        />
      ))}
      {insertable && (
        <AbsoluteRoundEndLine
          width={width}
          leftMargin={0}
          rightMargin={width}
          left={roundMouseLeftPosition}
          right={roundMouseLeftPosition + interval}
          onLeftChange={() => {}}
          onRightChange={() => {}}
          number={number}
          labels={labels}
          preview
          color={color}
        />
      )}
      <div style={{ width }}></div>
      {reset && (
        <IconContainer onClick={handleReset}>
          <Icons name="Clear" color="#999999" size={24} />{" "}
        </IconContainer>
      )}
    </Container>
  );
};

export default RangePicker;

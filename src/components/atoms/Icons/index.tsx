import React from "react";
import { ReactComponent as AddCalendar } from "../../../assets/svgs/AddCalendar.svg";
import { ReactComponent as Calendar } from "../../../assets/svgs/Calendar.svg";
import { ReactComponent as Check } from "../../../assets/svgs/Check.svg";
import { ReactComponent as Clear } from "../../../assets/svgs/Clear.svg";
import { ReactComponent as Clock } from "../../../assets/svgs/Clock.svg";
import { ReactComponent as Close } from "../../../assets/svgs/Close.svg";
import { ReactComponent as ColorPicker } from "../../../assets/svgs/ColorPicker.svg";
import { ReactComponent as FixPin } from "../../../assets/svgs/FixPin.svg";
import { ReactComponent as Information } from "../../../assets/svgs/Information.svg";
import { ReactComponent as LineArrowDown } from "../../../assets/svgs/LineArrowDown.svg";
import { ReactComponent as LineArrowUp } from "../../../assets/svgs/LineArrowUp.svg";
import { ReactComponent as OpenFolder } from "../../../assets/svgs/OpenFolder.svg";
import { ReactComponent as LineArrowRight } from "../../../assets/svgs/LineArrowRight.svg";

import styled from "styled-components";

const Container = styled.div``;

export const iconList = {
  AddCalendar,
  Calendar,
  Check,
  Clear,
  Clock,
  Close,
  ColorPicker,
  FixPin,
  Information,
  LineArrowDown,
  LineArrowUp,
  LineArrowRight,
  OpenFolder,
};

interface IconsProps {
  name: keyof typeof iconList;
  size: number;
  color?: string;
}

// TODO: need to work on Clock

const Icons = ({ name, size, color = "#999999" }: IconsProps) => {
  const Componet = iconList[name];
  return (
    <Componet
      width={size}
      height={size}
      fill={color}
      stroke={color}
      strokeWidth={name === "Clock" ? 1 : 0}
      strokeOpacity="normal"
    />
  );
};
export default Icons;

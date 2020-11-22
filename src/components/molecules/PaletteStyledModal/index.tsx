import React from "react";
import StyledBox from "../../atoms/StyledBox";
import { StyledBoxProps } from "../../atoms/StyledBox/index";
import styled from "styled-components";
import Icons from "../../atoms/Icons";
import { iconList } from "../../atoms/Icons/index";
import Label from "../../atoms/Label";

interface PaletteStyledModal extends StyledBoxProps {
  titleIcon?: keyof typeof iconList;
  titleLabel?: string;
  titleIconColor?: string;
}

interface TitleBoxProps {
  color?: string;
}

const TitleBox = styled.div<TitleBoxProps>`
  border-bottom: 1px solid ${({ color }) => (color ? color : "#dcdcdc")};
  height: 30px;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  padding: 3px 2.5px 3px 0px;
`;

const CloseIconContainer = styled.div`
  padding: 3px 3px 3px 0px;
  /* left: 00px; */
  /* top: 100px; */
`;

const LabelContainer = styled.div`
  padding: 4.5px 0px;
`;

const PaletteStyledModal = ({
  width,
  height,
  titleIcon,
  titleLabel = "타이틀을 넣어주세요",
  titleIconColor,
}: PaletteStyledModal) => {
  const color = "#dcdcdc";

  return (
    <>
      <StyledBox width={width} height={height} color={color}>
        <TitleBox color={color}>
          <div style={{ flexDirection: "row", display: "flex", marginLeft: 4 }}>
            {titleIcon && (
              <IconContainer>
                <Icons
                  name={titleIcon}
                  color={titleIconColor || "#999999"}
                  size={24}
                />
              </IconContainer>
            )}
            <LabelContainer>
              <Label>{titleLabel}</Label>
            </LabelContainer>
          </div>

          <CloseIconContainer>
            <Icons name="Close" color={titleIconColor || "#999999"} size={24} />
          </CloseIconContainer>
        </TitleBox>
      </StyledBox>
    </>
  );
};

export default PaletteStyledModal;

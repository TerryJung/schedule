import React from "react";
import Label from "../../components/atoms/Label/index";
import MoleculesTextWithIcon from "./MoleculesTextWithIcon";
import MoleculesInputWithIcon from "./MoleculesInputWithIcon";
import MoleculesInputWithLabel from "./MoleculesInputWithLabel";
import MoleculesDropDownItem from "./MoleculesDropDownItem";
import MoleculesDropDownItemList from "./MoleculesDropDownItemList";
import MoleculesDropDown from "./MoleculesDropDown";
import MoleculesStyledTextWithIcon from "./MoleculesStyledTextWithIcon";

const Molecules = () => {
  return (
    <>
      <Label color="blue" size={30}>
        Molecules
      </Label>
      <MoleculesTextWithIcon />
      <MoleculesStyledTextWithIcon />
      <MoleculesInputWithIcon />
      <MoleculesInputWithLabel />
      <MoleculesDropDownItem />
      <MoleculesDropDownItemList />
      <MoleculesDropDown />
    </>
  );
};

export default Molecules;

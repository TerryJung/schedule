import React from "react";
import Label from "../../components/atoms/Label/index";
import MoleculesTextWithIcon from "./MoleculesTextWithIcon";
import MoleculesInputWithIcon from "./MoleculesInputWithIcon";
import MoleculesInputWithLabel from "./MoleculesInputWithLabel";
import MoleculesDropDownItem from "./MoleculesDropDownItem";
import MoleculesDropDownItemList from "./MoleculesDropDownItemList";

const Molecules = () => {
  return (
    <>
      <Label color="blue" size={30}>
        Molecules
      </Label>
      <MoleculesTextWithIcon />
      <MoleculesInputWithIcon />
      <MoleculesInputWithLabel />
      <MoleculesDropDownItem />
      <MoleculesDropDownItemList />
    </>
  );
};

export default Molecules;

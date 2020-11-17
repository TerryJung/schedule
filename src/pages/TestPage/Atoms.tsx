import React from "react";
import Label from "../../components/atoms/Label/index";
import AtomsIcons from "./AtomsIcons";
import AtomsButton from "./AtomsButton";
import AtomsInput from "./AtomsInput";
import AtomsLabel from "./AtomsLabel";
import AtomsText from "./AtomsText";
import AtomsStyledText from "./AtomsStyledText";

const Atoms = () => {
  return (
    <>
      <Label color="blue" size={30}>
        Atoms
      </Label>
      <AtomsIcons />
      <AtomsButton />
      <AtomsInput />
      <AtomsLabel />
      <AtomsText />
      <AtomsStyledText />
    </>
  );
};

export default Atoms;

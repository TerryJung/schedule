import React from 'react';
import Label from '../../components/atoms/Label/index';
import MoleculesTextWithIcon from './MoleculesTextWithIcon';
import MoleculesInputWithIcon from './MoleculesInputWithIcon';
import MoleculesInputWithLabel from './MoleculesInputWithLabel';

const Molecules = () => {
  return (
    <>
      <Label color="blue" size={30}>
        Molecules
      </Label>
      <MoleculesTextWithIcon />
      <MoleculesInputWithIcon />
      <MoleculesInputWithLabel />
    </>
  );
};

export default Molecules;

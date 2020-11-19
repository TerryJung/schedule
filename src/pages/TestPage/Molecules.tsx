import React from 'react';
import Label from '../../components/atoms/Label/index';
import MoleculesTextWithIcon from './MoleculesTextWithIcon';
import MoleculesInputWithIcon from './MoleculesInputWithIcon';
import MoleculesInputWithLabel from './MoleculesInputWithLabel';
import MoleculesDropdownItem from './MoleculesDropdownItem';
import MoleculesDropdownItemList from './MoleculesDropdownItemList';
import MoleculesDropdown from './MoleculesDropdown';
import MoleculesStyledTextWithIcon from './MoleculesStyledTextWithIcon';

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
      <MoleculesDropdownItem />
      <MoleculesDropdownItemList />
      <MoleculesDropdown />
    </>
  );
};

export default Molecules;

import React, { useState } from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import Dropdown from "../../components/molecules/Dropdown/index";

const FlexRowContainer = styled.div`
  display: flex;
`;

const MoleculesDropdown = () => {
  const [selected1, setSelected1] = useState<null | number>(null);
  const [selected2, setSelected2] = useState<null | number>(null);
  const [selected3, setSelected3] = useState<null | number>(null);
  const [selected4, setSelected4] = useState<null | number>(null);
  const [selected5, setSelected5] = useState<null | number>(null);
  const [selected6, setSelected6] = useState<null | number>(null);
  const [selected7, setSelected7] = useState<null | number>(null);
  const [selected8, setSelected8] = useState<null | number>(null);
  const [selected9, setSelected9] = useState<null | number>(null);
  const [selected10, setSelected10] = useState<null | number>(null);

  const dropdownList = [
    "Text1",
    "Text2",
    "Text3",
    "Text4",
    "Text5",
    "Text6",
    "Text7",
    "Text8",
    "Text9",
  ];

  return (
    <>
      <Label color="#232323" size={20}>
        Molecules - Dropdown
      </Label>
      <FlexRowContainer>
        <Dropdown
          width={150}
          list={dropdownList}
          selected={selected1}
          onChangeSelected={(value) => setSelected1(value)}
        />
        <Dropdown
          width={200}
          label="진료실"
          list={dropdownList}
          selected={selected2}
          onChangeSelected={(value) => setSelected2(value)}
        />
        <Dropdown
          width={200}
          label="진료실"
          disabled
          list={dropdownList}
          selected={selected3}
          onChangeSelected={(value) => setSelected3(value)}
        />
        <Dropdown
          width={200}
          list={dropdownList}
          placeholder="아무것도 선택되지 않음"
          selected={selected4}
          onChangeSelected={(value) => setSelected4(value)}
        />
        <Dropdown
          width={150}
          list={dropdownList}
          placeholder="위"
          direction="Up"
          selected={selected5}
          onChangeSelected={(value) => setSelected5(value)}
        />
        <Dropdown
          width={150}
          list={dropdownList}
          placeholder="겹치게"
          direction="Overlap"
          selected={selected6}
          onChangeSelected={(value) => setSelected6(value)}
        />
        <Dropdown
          width={150}
          list={dropdownList}
          placeholder="아래"
          direction="Down"
          selected={selected7}
          onChangeSelected={(value) => setSelected7(value)}
        />
        <Dropdown
          width={150}
          list={dropdownList}
          placeholder="왼쪽"
          direction="Left"
          selected={selected8}
          onChangeSelected={(value) => setSelected8(value)}
        />
        <Dropdown
          width={150}
          list={dropdownList}
          placeholder="오른쪽"
          direction="Right"
          selected={selected9}
          onChangeSelected={(value) => setSelected9(value)}
        />
        <Dropdown
          width={150}
          list={dropdownList}
          placeholder="No 자동선택"
          autoSelect={false}
          selected={selected10}
          onChangeSelected={(value) => setSelected1(value)}
        />
      </FlexRowContainer>
    </>
  );
};

export default MoleculesDropdown;

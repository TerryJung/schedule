import React, { useState } from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import Input from "../../components/atoms/Input";

const FlexRowContainer = styled.div`
  display: flex;
`;

const AtomsInput = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  return (
    <>
      <Label color="#232323" size={20}>
        Atoms - Input
      </Label>

      <FlexRowContainer>
        <Input value={text1} onChange={(e) => setText1(e.target.value)} />
        <Input
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          placeholder="placeholder"
        />
        <Input
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          placeholder="disabled"
          disabled
        />
        <Input
          value={text3}
          onChange={(e) => setText3(e.target.value)}
          placeholder="StyledInput"
          style={{
            borderColor: "#abcdef",
            backgroundColor: "#123456",
            color: "white",
            width: 100,
          }}
        />
      </FlexRowContainer>
    </>
  );
};

export default AtomsInput;

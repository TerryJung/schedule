import React from "react";
import Text from "../../components/atoms/Text/index";
import styled from "styled-components";
import Label from "../../components/atoms/Label";

const FlexRowContainer = styled.div`
  display: flex;
`;

const AtomsText = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Atoms - Text
      </Label>

      <FlexRowContainer>
        <Text>Basic</Text>
        <Text>Basic2</Text>
        <Text>Basic3</Text>
        <Text>괜히 하나 더 만들었.... Label하고 큰 차이 없..</Text>
      </FlexRowContainer>
      <FlexRowContainer>
        <Text size={10}>SizeVariation</Text>
        <Text size={20}>SizeVariation</Text>
        <Text size={30}>SizeVariation</Text>
        <Text size={40}>SizeVariation</Text>
      </FlexRowContainer>
      <FlexRowContainer>
        <Text color="red" size={10}>
          ColorVariation
        </Text>
        <Text color="blue" size={20}>
          ColorVariation
        </Text>
        <Text color="yellow" size={30}>
          ColorVariation
        </Text>
        <Text color="green" size={40}>
          ColorVariation
        </Text>
      </FlexRowContainer>
    </>
  );
};

export default AtomsText;

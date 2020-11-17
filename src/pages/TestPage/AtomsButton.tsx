import React from "react";
import Label from "../../components/atoms/Label/index";
import styled from "styled-components";
import Icons from "../../components/atoms/Icons/index";
import Button from "../../components/atoms/Button/index";
import { ButtonVariant } from "../../components/atoms/Button/index";
import Text from "../../components/atoms/Text/index";

const FlexRowContainer = styled.div`
  display: flex;
`;

const AtomsButton = () => {
  return (
    <>
      <Label color="#232323" size={20}>
        Atoms - Button
      </Label>
      <FlexRowContainer>
        <Button></Button>
        <Button>Only Text</Button>
        <Button>Long Long Long Text</Button>
      </FlexRowContainer>
      <FlexRowContainer>
        <Button variant={ButtonVariant.floodFill}>ButtonVariant</Button>
        <Button variant="floodFill">It is floodFill Variant</Button>
        <Button variant="floodFill">It is floodFill Variant</Button>
      </FlexRowContainer>
      <FlexRowContainer>
        <Button>
          <Text>(Atom) Text Component</Text>
        </Button>
        <Button>
          <Text size={5}>(Atom) Text Component</Text>
        </Button>
        <Button>
          <Text size={30}>(Atom) Text Component</Text>
        </Button>
      </FlexRowContainer>
      <FlexRowContainer>
        <Button variant="floodFill">
          <Text color="white">(Atom) Text Component</Text>
        </Button>
        <Button variant="floodFill">
          <Text color="red" size={5}>
            (Atom) Text Component
          </Text>
        </Button>
        <Button variant="floodFill">
          <Text color="#FF5" size={30}>
            (Atom) Text Component
          </Text>
        </Button>
      </FlexRowContainer>
      <FlexRowContainer>
        <Button>
          <Text size={30}>
            Not worked well when components are in the button
          </Text>
        </Button>
      </FlexRowContainer>
      <FlexRowContainer>
        <Button>
          <Text size={15}>Text + Icon</Text>
          <Icons color="#FF5733" name="OpenFolder" size={72} />
        </Button>
        <Button>
          <Text size={15}>Text + Icon</Text>
          <Icons color="#FF5733" name="OpenFolder" size={24} />
        </Button>
        <Button>
          <FlexRowContainer>
            <Text size={15}>Text + Icon</Text>
            <Icons color="#FF5733" name="OpenFolder" size={24} />
          </FlexRowContainer>
        </Button>
        <Button>
          <FlexRowContainer>
            <Icons color="#FF5733" name="OpenFolder" size={20} />
            <Text size={15}>Text + Icon</Text>
          </FlexRowContainer>
        </Button>
      </FlexRowContainer>
    </>
  );
};

export default AtomsButton;

import React, { useState } from 'react';
import Icons from '../../../components/atoms/Icons';
import Input from '../../../components/atoms/Input';
import InputWithIcon from '../../../components/molecules/InputWithIcon/index';
import Label from '../../atoms/Label';
import InputWithLabel from '../../molecules/InputWithLabel';
import Button from '../../atoms/Button/index';
import { ButtonVariant } from '../../atoms/Button/index';
import Text from '../../atoms/Text/index';

const TestComponents = () => {
  const [scheduleName, setScheduleName] = useState('');
  const [inputWithLabelValue, setInputWithLabelValue] = useState('');

  console.log(scheduleName);

  return (
    <div style={{ verticalAlign: 'top' }}>
      <Input
        value={scheduleName}
        onChange={(e) => setScheduleName(e.target.value)}
        size={10}
        style={{ width: '500px' }}
      />
      <Icons name="Clear" color="#999999" size={100} />
      <InputWithIcon
        value={scheduleName}
        onChange={(e) => setScheduleName(e.target.value)}
        size={10}
        style={{ width: '100px' }}
        iconName="Calendar"
      />
      <Label color="blue" size={30}>
        Atoms
      </Label>
      <Text>Text</Text>
      <Text>Label</Text>
      <Button>
        <Text>Button</Text>
      </Button>
      <Button>
        <Text>취소</Text>
      </Button>
      <Button variant={ButtonVariant.FloodFill}>
        <Text color="white">저장</Text>
      </Button>
      <Label color="blue" size={30}>
        Molecules
      </Label>
      <Label color="#232323" size={20}>
        Molecules - InputWithLabel
      </Label>
      <InputWithLabel
        value={inputWithLabelValue}
        onChange={(e) => setInputWithLabelValue(e.target.value)}
        labelText={'InputWithLabel'}
      />
    </div>
  );
};

export default TestComponents;

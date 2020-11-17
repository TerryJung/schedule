import React, { useState } from 'react';
import Icons from '../../../components/atoms/Icons';
import Input from '../../../components/atoms/Input';
import InputWithIcon from '../../../components/molecules/InputWithIcon/index';
import Label from '../../atoms/Label';

const TestComponents = () => {
  const [scheduleName, setScheduleName] = useState('');

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
      <Label>테스트 라벨</Label>
    </div>
  );
};

export default TestComponents;

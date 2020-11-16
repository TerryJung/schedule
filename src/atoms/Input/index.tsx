import React from 'react';

const inputContainerStyle = {};

const inputStyle = {
  height: '30px',
  background: '#FFFFFF',
  border: '1px solid #DCDCDC',
  borderRadius: '5px',
  padding: '5px 10px 5px 10px',
};

function Input() {
  return (
    <div style={inputContainerStyle}>
      <form>
        <input type="text" style={inputStyle} />
      </form>
    </div>
  );
}

export default Input;

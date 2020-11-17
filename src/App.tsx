import React from 'react';
import GlobalFonts from './fonts';
import Schedule from './pages/Schedule';
import TestComponents from './components/oragnisms/TestComponents/index';

function App() {
  return (
    <div style={{ padding: 40 }}>
      <GlobalFonts />
      <Schedule />
      <TestComponents />
    </div>
  );
}

export default App;

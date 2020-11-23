import React from "react";
import GlobalFonts from "./fonts";
import TestPage from "./pages/TestPage";
// import TestComponents from "./components/oragnisms/TestComponents/index";
import Schedule from "./pages/Schedule/index";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <GlobalFonts />
      <Schedule />
      <div style={{ height: 30 }}></div>
      {/* <TestComponents /> */}
      <TestPage />
    </div>
  );
}

export default App;

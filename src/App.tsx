import React from "react";
import GlobalFonts from "./fonts";
import Schedule from "./pages/Schedule";
import TestComponents from "./components/oragnisms/TestComponents/index";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <GlobalFonts />
      {/* <Schedule />
      <TestComponents /> */}
      <TestPage />
    </div>
  );
}

export default App;

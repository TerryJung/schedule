import React from "react";
import "./App.css";
import Input from "./components/atoms/Input";
import GlobalFonts from "./fonts";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <header className="App-header">
        <Schedule />
      </header>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/main/MainSection";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <MainSection />
      </div>
    </div>
  );
};

export default App;

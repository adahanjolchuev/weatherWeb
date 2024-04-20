import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/hero";
import { Theme } from "./components/Hero/theme/thme";
import OnePages from "./components/onePages/OnePages";
import { Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("dark");
  return (
    <div>
      <div className="App">
        <Routes>
          <Route path="/" element={<OnePages />} key={1} />
          <Route path="/Weather" element={<Hero />} key={2} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

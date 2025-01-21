// import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pattern from "./components/Pattern";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Pattern />
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
    
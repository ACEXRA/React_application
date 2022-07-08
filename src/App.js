import React from "react";
import "./assets/scss/app.scss";
import Navbar from "./components/UI/Navbar";
import Content from "./components/content/Content";

function App() {
  return (
    <div className="main_layout">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

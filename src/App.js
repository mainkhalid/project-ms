import React from "react";
import './index.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import {route , routes} from "react-router-dom";

function App() {
  return (
    <>
    <routes>
      <route path="/" element={<Home/>}/>
      <route path="/project" element={<Project/>}/>
      <route path="/about" element={<About/>}/>
      <route path="/contact" element={<Contact/>}/>
    </routes>
    </>
  );
}

export default App;

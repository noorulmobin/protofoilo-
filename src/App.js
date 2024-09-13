import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from './routes/Contact';
import Project from './routes/Project';
import Skills from './routes/Skills'; 

import NotFound from "./routes/NotFound";

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
       
        
        {/*  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

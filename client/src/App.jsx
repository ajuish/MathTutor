import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Topics from './Topics'
import Login from './Login'
import NavBar from './NavBar'

function App() {

  return (
    <>
    <NavBar/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/topics" element={<Topics />}/>
    
      </Routes>
      </>
  );
}

export default App;
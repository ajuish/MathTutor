import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Topics from './Topics'
import Login from './Login'
import NavBar from './NavBar'
import Signup from './Signup'
import Addition from './Addition'

function App() {

  return (
    <>
    <NavBar/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/topics" element={<Topics />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path='/addition' element={<Addition />}/>
    
      </Routes>
      </>
  );
}

export default App;
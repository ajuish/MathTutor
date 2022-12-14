import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Topics from './Topics'
import Login from './Login'
import NavBar from './NavBar'
import Signup from './Signup'
import Fundamentals from './Fundamentals'
import Profile from './Profile'
import './index.css'

function App() {

  return (
    <div className='background'>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/topics' element={<Topics />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/fundamentals' element={<Fundamentals />}/>
        </Routes>
      </div>
  );
}

export default App;
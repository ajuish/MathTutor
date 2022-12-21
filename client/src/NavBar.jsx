import React from 'react'
import {useNavigate} from 'react-router-dom'

function NavBar() {

const navigate = useNavigate()

// function navHome() {
//   navigate("/")
// }

// function navLogout(){
//   sessionStorage.clear()
// }

  return (
    <>
    <div className="ui secondary menu">
      {/* <h1 classNameName='title'>React Piano</h1> */}
    <div className="left menu">
      <a className="item" href='/'>
        Home
      </a>
      {/* <a onClick={navProfile} className="item">
        Profile
      </a> */}
      <a href='/login' className="item">
        Login
      </a>
      <a href='/signup' className="item">
        Signup
      </a>
      <a onClick={()=>sessionStorage.clear()} className="item" href='/'>
        Logout
      </a>
    </div>
  </div>
  </>
  )
}

export default NavBar
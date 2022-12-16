import React from 'react'

function NavBar() {

// const navigate = useNavigate()

// function navPiano() {
//     navigate("/piano")
// }

// function navHome() {
//   navigate("/")
// }

function navLogout(){
  sessionStorage.clear()
//   navigate("/")
}

// function navProfile(){
//   navigate('/profile')
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
      {/* <a onClick={navSignup} className="item">
        Signup
      </a> */}
      {/* <a onClick={navLogout} className="item" href='/logout'>
        Logout
      </a> */}
    </div>
  </div>
  </>
  )
}

export default NavBar
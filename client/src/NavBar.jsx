import React from 'react'
// import {useNavigate} from 'react-router-dom'

function NavBar() {

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
      {sessionStorage.getItem('user_id') ?
      <>
        <a href='/fundamentals' className="item">
          Fundamentals
        </a>
        <a href='/topics' className="item">
          Topics
        </a>
      </>
      : null}
      {sessionStorage.getItem('user_id') ?
      <a onClick={()=>sessionStorage.clear()} className="item" href='/'>
        Logout
      </a> :
      <a href='/login' className="item">
        Login
      </a>
      } 
    </div>
  </div>
  </>
  )
}

export default NavBar
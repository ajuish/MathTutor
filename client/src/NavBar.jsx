import React from 'react'
// import {useNavigate} from 'react-router-dom'

function NavBar() {

  return (
    <div className='nav'>
    <div className="ui secondary menu">
      {/* <h1 classNameName='title'>React Piano</h1> */}
    <div className="left menu">
      
      <a className="item" href='/'>
        <h3>Home</h3>
      </a>
      {sessionStorage.getItem('user_id') ?
        <>
          <a href='/profile' className="item">
            <h3>Profile</h3>
          </a>
          <a href='/fundamentals' className="item">
            <h3>Fundamentals</h3>
          </a>
          <a href='/topics' className="item">
            <h3>Topics</h3>
          </a>
        </>
        : null
      }
      {sessionStorage.getItem('user_id') ?
        <a onClick={()=>sessionStorage.clear()} className="item" href='/'>
          <h3>Logout</h3>
        </a> :
        <a href='/login' className="item">
          <h3>Login</h3>
        </a>
      } 
    </div>
  </div>
  </div>
  )
}

export default NavBar
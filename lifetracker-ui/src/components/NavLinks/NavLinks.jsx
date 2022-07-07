import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./NavLinks.css"

export default function NavLinks(props) {
  const navigate = useNavigate();
  console.log(13,props.appState)
  const logOut = () =>{
    props.setAppState({})
    navigate("/login")
  }

  return (
    <div className='navlinks'>
      <span className='nav-header'>
          {Object.keys(props.appState).length !== 0 ? 
          <span className='logged-in'>
            <Link id='activity' className='links' to="/activity">Activity</Link>
            <Link className='links' to="/nutrition">Nutrition</Link>
            <button className='sign-out' onClick={logOut}>Sign Out</button>
          </span>
          : null}
          {Object.keys(props.appState).length === 0 ? 
          <span className='logged-out'>
            <Link id='activity' className='links' to="/login">Activity</Link>
            <Link className='links' to="/login">Nutrition</Link>
            <button className='login' onClick={()=>navigate("/login")} >Login</button>
            <button className='register' onClick={()=>navigate("/register")}>Sign Up</button>
          </span>: null}
      </span>
    </div>
  )
}

import React from 'react'
import "./Navbar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from "../Logo/Logo"
import NavLinks from "../NavLinks/NavLinks"

export default function Navbar(props) {
  const navigate = useNavigate();
  console.log(13,props.appState)
  const logOut = () =>{
    props.setAppState({})
    navigate("/")
  }
  return (
    <div className='navbar'>
      <div className='header'>
        <div className='logo'>
          <Logo/>
        </div>
        <div className='navlinks-div'>
          <NavLinks className='navlinks'/>
        </div>
        <div className='nav-btns'>
          {Object.keys(props.appState).length !== 0 ? 
          <button className='sign-out' onClick={logOut}>Sign Out</button>: null}
          {Object.keys(props.appState).length === 0 ? 
          <div>
            <button className='login' onClick={()=>navigate("/login")} >Login</button>
            <button className='register' onClick={()=>navigate("/register")}>Register</button>
          </div>: null}
        </div>
      </div>
    </div>
  )
}

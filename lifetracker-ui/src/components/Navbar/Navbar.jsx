import React from 'react'
import "./Navbar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from "../Logo/Logo"
import NavLinks from "../NavLinks/NavLinks"

export default function Navbar(props) {

  return (
    <div className='navbar'>
      <div className='header'>
        <div className='logo'>
          <Logo/>
        </div>
        <div className='navlinks-div'>
          <NavLinks className='navlink' appState={props.appState} setAppState = {props.setAppState}/>
        </div>
      </div>
    </div>
  )
}

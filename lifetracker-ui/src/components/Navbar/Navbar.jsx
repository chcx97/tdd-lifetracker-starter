import React from 'react'
import "./Navbar.css"
import { useLocation,Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from "../Logo/Logo"
import NavLinks from "../NavLinks/NavLinks"
import { AuthContextProvider } from 'components/contexts/auth'
export default function Navbar(props) {
  // const path = useLocation().pathname;
  // const location = path.split("/")[1];
  return (
      <div className='navbar'>
      <div className="header">
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

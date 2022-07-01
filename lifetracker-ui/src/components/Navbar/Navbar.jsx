import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import Logo from "../Logo/Logo"
import NavLinks from "../NavLinks/NavLinks"

export default function Navbar() {
  return (
    <div className='navbar'>
        <Logo/>
        <NavLinks/>
        <button className='sign-out'>Sign Out</button>
        <button className='login'>Login</button>
        <button className='register'>Register</button>
    </div>
  )
}
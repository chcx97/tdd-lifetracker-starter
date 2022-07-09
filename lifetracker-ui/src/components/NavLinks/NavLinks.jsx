import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./NavLinks.css"
import { useAuthContext } from 'components/contexts/auth';
export default function NavLinks(props) {
  const {user, setUser, logoutUser} = useAuthContext()
  const navigate = useNavigate();
  console.log(13,props.appState)
  console.log(14, user)
  const logOut = () =>{
    logoutUser();
    props.setAppState({})
    setUser({})
    navigate("/")
  }

  return (
    <div className='navlinks'>
      <span className='nav-header'>
          {/* {Object.keys(props.appState).length !== 0 ?  */}
          { Object.keys(user).length !==0 ?
          <span className='logged-in'>
            <Link id='activity' className='links' to="/activity">Activity</Link>
            <Link className='links' to="/nutrition">Nutrition</Link>
            <button id='sign-out' className='sign-out' onClick={logOut}>Sign Out</button>
          </span>
          : <span className='logged-out'>
          <Link id='activity' className='links' to="/login">Activity</Link>
          <Link className='links' to="/login">Nutrition</Link>
          <button id='login' className='login' onClick={()=>navigate("/login")} >Login</button>
          <button id='register' className='register' onClick={()=>navigate("/register")}>Sign Up</button>
        </span>}
          {/* {Object.keys(props.appState).length === 0 ?  */}
          {/* { user ?
          : null} */}
      </span>
    </div>
  )
}

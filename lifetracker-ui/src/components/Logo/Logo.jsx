import React from 'react'
import { Link } from 'react-router-dom'
export default function Logo() {
  return (
    <div className='logo'>
        <Link to="/"><img className='logo-img' src='https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-fitness-tracker-sport-equipment-flaticons-flat-flat-icons.png' height="70px" width="70px"></img></Link>
    </div>
    
  )
}

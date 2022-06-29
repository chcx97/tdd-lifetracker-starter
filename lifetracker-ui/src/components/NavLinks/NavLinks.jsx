import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinks() {
  return (
    <div className='navlinks'>
        <Link to="/activity">Activity</Link>
        <Link to="/nutrition">Nutrition</Link>
    </div>
  )
}

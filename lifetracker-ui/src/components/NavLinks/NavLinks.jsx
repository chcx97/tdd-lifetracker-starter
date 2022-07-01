import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinks() {
  return (
    <div className='navlinks'>
      <ul>
        <li><Link to="/activity">Activity</Link></li>
        <li><Link to="/nutrition">Nutrition</Link></li>
      </ul>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinks() {
  return (
    <div className='navlinks'>
      <Link className='links' to="/activity">Activity</Link>
      <Link className='links' to="/nutrition">Nutrition</Link>
    </div>
  )
}

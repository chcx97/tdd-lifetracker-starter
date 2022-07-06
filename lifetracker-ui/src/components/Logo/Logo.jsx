import React from 'react'
import { Link } from 'react-router-dom'
import heart1 from './heart1.png'
import heart2 from './heart2.png'
export default function Logo() {
  return (
    <div className='logo'>
        <Link to="/"><img className='logo-img' src={heart2} height="60px" width="60px"></img></Link>
    </div>
    
  )
}

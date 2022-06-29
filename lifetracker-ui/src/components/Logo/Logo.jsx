import React from 'react'
import { Link } from 'react-router-dom'
export default function Logo() {
  return (
    <div className='logo'>
        <Link to="/"><img className='logo-img' src='http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg'></img></Link>
    </div>
    
  )
}

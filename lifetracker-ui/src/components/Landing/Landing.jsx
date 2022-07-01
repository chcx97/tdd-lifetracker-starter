import "./Landing.css"
import React from "react"

export default function Landing () {
    return(
        <div className="landing">
            <div className="hero">
                <img className="hero-img" src="https://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"></img> 
                <span className="cta">
                    <h1>Life Tracker</h1>
                    <h2>Helping you take back control of your world</h2>
                </span> 
                
            </div>
        </div>
    )
}
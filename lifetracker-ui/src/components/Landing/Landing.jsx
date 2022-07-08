import "./Landing.css"
import React from "react"

export default function Landing () {
    return(
        <div className="landing">
            <div className="hero">
                <img className="hero-img" src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img> 
                <div className="cta">
                    <h1>Life Tracker</h1>
                    <h2>Helping you take back control of your world</h2>
                </div> 
                
            </div>
        </div>
    )
}
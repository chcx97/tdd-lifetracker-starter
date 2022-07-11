import "./LoginPage.css"
import React from "react"
import LoginForm from "components/LoginForm/LoginForm"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "components/contexts/auth"


export default function LoginPage(props) {
    const navigate = useNavigate()
    const {user} = useAuthContext()
    const token = localStorage.getItem("lifetracker_token")
    //(Object.keys(user).length===0)
    // console.log(13,user)
    return (
        <div className="login-page">
        {(Object.keys(user).length===0) ? <LoginForm setAppState={props.setAppState} appState = {props.appState} />: navigate("/activity")}
        </div>
    )
}
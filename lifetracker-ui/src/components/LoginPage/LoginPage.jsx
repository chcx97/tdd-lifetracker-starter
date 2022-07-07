import "./LoginPage.css"
import React from "react"
import LoginForm from "components/LoginForm/LoginForm"
import { useNavigate } from "react-router-dom"

export default function LoginPage(props) {
    const navigate = useNavigate()
    return (
        <div className="login-page">
        {props.appState ? <LoginForm setAppState={props.setAppState} appState = {props.appState} />: navigate("/activity")}
        </div>
    )
}
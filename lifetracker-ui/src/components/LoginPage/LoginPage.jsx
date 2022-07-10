import "./LoginPage.css"
import React from "react"
import LoginForm from "components/LoginForm/LoginForm"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "components/contexts/auth"


export default function LoginPage(props) {
    const navigate = useNavigate()
    const {token} = useAuthContext()
    return (
        <div className="login-page">
        {!token ? <LoginForm setAppState={props.setAppState} appState = {props.appState} />: navigate("/activity")}
        </div>
    )
}
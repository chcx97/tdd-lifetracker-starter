import "./LoginForm.css"
import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios"

export default function LoginForm() {
    const navigate = useNavigate()
    const [form, setForm] = useState({email: "", password:""})
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleOnChange = (e) =>{
        if (e.target.name === "email"){
            if(e.target.value.indexOf("@") === -1){
                setError((e) => ({...e, email: "Please enter a valid email"}))
            } else {
                setError((e)=>({...e, email: null}))
            }
        }
        setForm((f) => ({...f, [e.target.name]: e.target.value}))
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors((e) => ({ ...e, form: null }))
    
        try {
          const res = await axios.post(`http://localhost:3001/auth/login`, form)
          if (res?.data) {
            setAppState(res.data)
            setIsLoading(false)
            navigate("/portal")
          } else {
            setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
            setIsLoading(false)
          }
        } catch (err) {
          console.log(err)
          const message = err?.response?.data?.error?.message
          setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
          setIsLoading(false)
        }
      }
  return (
    <div className='login-form'>
      <div className="card">
        <h2>Login to the Portal</h2>

        {Boolean(error.form) && <span className="error">{error.form}</span>}
        <br />
         <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={handleOnChange}
            />
            {error.email && <span className="error">{error.email}</span>}
         </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleOnChange}
            />
      </div>
      {error.password && <span className="error">{error.password}</span>}
    </div>
    <button className="submit-login" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Login"}
          </button>
    <div className="footer">
      <p>
      Don't have an account? Sign up <Link to="/register">here</Link>
      </p>
      </div>
   </div>
  </div>
  )
}

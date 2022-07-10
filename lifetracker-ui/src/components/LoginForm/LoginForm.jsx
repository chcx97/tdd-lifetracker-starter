import "./LoginForm.css"
import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthContext } from "components/contexts/auth"


export default function LoginForm(props) {
    const navigate = useNavigate()
    const [form, setForm] = useState({email: "", password:""})
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {user, loginUser, setError, error} = useAuthContext();

    console.log(15, form, error, isLoading, user)
    console.log(16,Boolean(errors.form));
    const handleOnChange = (e) =>{
        if (e.target.name === "email"){
            if(e.target.value.indexOf("@") === -1){
                setErrors((e) => ({...e, email: "Please enter a valid email"}))
            } else {
                setErrors((e)=>({...e, email: null}))
            }
        }
        setForm((f) => ({...f, [e.target.name]: e.target.value}))
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors((e) => ({ ...e, form: null }))
        loginUser(form)
        if (user){
          setIsLoading(false)
          navigate("/activity")
        }

        // const {data, error} = await apiClient.login({email: form.email, password: form.password,})
        // if (error) setErrors((e) => ({ ...e, form: error}))
        // console.log(4,data)
        // if (data?.user){
        //   setUser(data.user)
        //   apiClient.setToken(data.token)
        //   setIsLoading(false)
        //   navigate("/activity")
        // }
        // setIsProcessing(false);
        // try {
        //   const res = await axios.post(`http://localhost:3001/auth/login`, form)
        //   if (res?.data) {
        //     console.log(12,res.data)
        //     props.setAppState(res.data)
        //     setIsLoading(false)
        //     setForm({email:"", password:""})
        //     navigate("/activity")
        //   } else {
        //     setError((e) => ({ ...e, form: "Invalid email/password combination" }))
        //     setIsLoading(false)
        //   }
        // } catch (err) {
        //   console.log(err)
        //   const message = err?.response?.data?.error?.message
        //   setError((e) => ({ ...e, form: message ? String(message) : String(err) }))
        //   setIsLoading(false)
        // }
      }
  return (
    <div className='login-form'>
      <div className="card">
        <h2>Login</h2>

        {Boolean(errors.form) && <span className="error">{errors.form}</span>}
        <br />
         <div className="form">
          <div className="input-field">
            <label className="email" htmlFor="email">Email</label>
            <input
              id="email"
              className="input"
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={handleOnChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
         </div>

          <div className="input-field">
            <label className="pw" htmlFor="password">Password</label>
            <input
              id="pw-input"
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleOnChange}
            />
      </div>
      {errors.password && <span className="error">{errors.password}</span>}
    </div>
    <div className="btn-area">
      <button className="submit-login" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Login"}
            
          </button>
    </div>
    <div className="footer">
      <p>
      Don't have an account? Sign up <Link to="/register">here</Link>
      </p>
      </div>
   </div>
  </div>
  )
}

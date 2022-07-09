import { useContext, createContext, useState, useEffect } from "react";
import apiClient from "../../../services/apiClient";
const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [initialized, setInitialized] = useState();
    const [isProcessing, setIsProcessing] = useState();
    const [error, setError] = useState({});

    useEffect(()=>{
        //checks if jwt token exists in local storage under the
        //lifetracker_token key
        //if it does, it should add the token to apiClient class with setToken
        //else isProcessing state var is set to true and error state set to null
        const token = localStorage.getItem("lifetracker_token");
        if (token){
            apiClient.setToken(token);
            fetchUserFromToken();
        }else{
            setIsProcessing(true)
            setError(null)
        }
        
        //next send get request to auth/me endpoint
        //if fails (.catch), error prop set to valid error message
        //if sucessful (.then) user state var set to user response and set error state var to null
        //always set (.finally) isProcessing set to false and initialized to true
    },[user])

    const loginUser = async(form) => {
        //should make a request to log the user in
        const {data, error} = await apiClient.login({email: form.email, password: form.password,})
        if (error) setErrors((e) => ({ ...e, form: error}))
        if (data?.user){
          setUser(data.user)
          apiClient.setToken(data.token)
        //   setIsLoading(false)
        //   navigate("/activity")
        }
        setIsProcessing(false);
    }
    const signupUser = async(form) => {
        const {data, error} = await apiClient.signup({email: form.email, username: form.username, firstName: form.firstName, lastName: form.lastName, password: form.password})
        if (error) setErrors((e) => ({ ...e, form: error}))
        console.log(4,data)
        if (data?.user){
          setUser(data.user)
          apiClient.setToken(data.token)
        }
        setIsProcessing(false);
        // const {data, error} = await apiClient.signup({email: form.email, username: form.username, firstName: form.firstName, lastName: form.lastName, password: form.password,})
        // if (error) setErrors((e) => ({ ...e, form: error}))
        // if (data?.user){
        //  setUser(data.user)
        // apiClient.setToken(data.token)
    }

    const fetchUserFromToken = async() => {
        //should make a request to the /auth/me route to get the user's info
        const {data, error} = await apiClient.fetchUserFromToken()
        if (error) setErrors((e) => ({ ...e, form: error}))
        if (data?.token){
          setUser(data.user)
          setError(null)
        }
        setIsProcessing(false)
        setInitialized(true)
    }
    const logoutUser = () => {
        //this function should remove the lifetracker_token from local storage and refresh the page so that all user data is reset
        apiClient.logoutUser()
        setUser({})
    }
    return(
        <AuthContext.Provider value={{ signupUser, logoutUser, fetchUserFromToken, loginUser, user, setUser, initialized, setInitialized, isProcessing, setIsProcessing, error, setError}}>
            <>{children}</>
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);
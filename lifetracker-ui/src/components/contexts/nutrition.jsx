import { useContext, createContext, useState, useEffect } from "react";
import apiClient from "../../../services/apiClient";

const NutritionContext = createContext();

export const NutritionContextProvider = ({children}) => {

    const [nutrition, setNutrition] = useState();
    const [initialized, setInitialized] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState(null);

    useEffect(()=>{
        //checks if jwt token exists in local storage under the
        //lifetracker_token key
        //if it does, it should add the token to apiClient class with setToken
        //else isProcessing state var is set to true and error state set to null

        //next send get request to auth/me endpoint
        //if fails (.catch), error prop set to valid error message
        //if sucessful (.then) user state var set to user response and set error state var to null
        //always set (.finally) isProcessing set to false and initialized to true
    },[])

    const loginUser = () => {
        //should make a request to log the user in
    }
    const signupUser = () => {
        // const {data, error} = await apiClient.signup({email: form.email, username: form.username, firstName: form.firstName, lastName: form.lastName, password: form.password,})
        // if (error) setErrors((e) => ({ ...e, form: error}))
        // if (data?.user){
        //  setUser(data.user)
        // apiClient.setToken(data.token)
    }

    const fetchUserFromToken = () => {
        //should make a request to the /auth/me route to get the user's info
    }
    const logoutUser = () => {
        //this function should remove the lifetracker_token from local storage and refresh the page so that all user data is reset
    }
    return(
        <NutritionContext.Provider value={{nutrition, setNutrition, initialized,setInitialized,isLoading,setIsLoading,error,setError}}>
            <>{children}</>
        </NutritionContext.Provider>
    );
};

export const useNutritionContext = () => useContext(NutritionContext);
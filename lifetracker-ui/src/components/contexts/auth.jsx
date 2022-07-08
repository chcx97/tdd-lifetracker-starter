import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState();
    const [initialized, setInitialized] = useState();
    const [isProcessing, setIsProcessing] = useState();
    const [error, setError] = useState();

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
        //should make a request to sign the user up
    }
    const fetchUserFromToken = () => {
        //should make a request to the /auth/me route to get the user's info
    }
    const logoutUser = () => {
        //this function should remove the lifetracker_token from local storage and refresh the page so that all user data is reset
    }
    return(
        <AuthContext.Provider value={{user, setUser, initialized, setInitialized, isProcessing, setIsProcessing, error, setError}}>
            <>{children}</>
        </AuthContext.Provider>
    );
};

export const useActivityContext = () => useContext(AuthContext);
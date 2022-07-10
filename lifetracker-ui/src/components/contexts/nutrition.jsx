import { useContext, createContext, useState, useEffect } from "react";
import apiClient from "../../../services/apiClient";
import { useAuthContext } from "./auth";

const NutritionContext = createContext();

export const NutritionContextProvider = ({children}) => {

    const [nutrition, setNutrition] = useState();
    const [initialized, setInitialized] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState(null);
    const {fetchUserFromToken, user} = useAuthContext();

    useEffect(()=>{
        //checks if jwt token exists in local storage under the
        //lifetracker_token key
        //if it does, it should add the token to apiClient class with setToken
        //else isProcessing state var is set to true and error state set to null
        fetchUserFromToken();
        if (user){
            setIsLoading(true)
            // setError(null)
             //get request to /activity endpoint
             //If all goes well...
            //It should set the data as the activity state variable
            //It should set the error state variable to null
            setError(null)
        }
        setIsLoading(false)
        setInitialized(true)
        //next send get request to auth/me endpoint
        //if fails (.catch), error prop set to valid error message
        //if sucessful (.then) user state var set to user response and set error state var to null
        //always set (.finally) isProcessing set to false and initialized to true
    },[])

    return(
        <NutritionContext.Provider value={{nutrition, setNutrition, initialized,setInitialized,isLoading,setIsLoading,error,setError}}>
            <>{children}</>
        </NutritionContext.Provider>
    );
};

export const useNutritionContext = () => useContext(NutritionContext);
import { useContext, createContext, useState, useEffect } from "react";
import apiClient from "../../../services/apiClient";
import { useAuthContext } from "./auth";

const NutritionContext = createContext();

export const NutritionContextProvider = ({children}) => {

    const [nutrition, setNutrition] = useState([]);
    const [initialized, setInitialized] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState(null);
    const {fetchUserFromToken, user} = useAuthContext();

    useEffect(async()=>{
        //checks if jwt token exists in local storage under the
        //lifetracker_token key
        //if it does, it should add the token to apiClient class with setToken
        //else isProcessing state var is set to true and error state set to null
        const token = localStorage.getItem("lifetracker_token")
        if (token){
            apiClient.setToken(token)
            fetchUserFromToken();
            if (user){
                setIsLoading(true)
                const {data, error} = await apiClient.listNutrition()
                console.log(36,error)
                if (error) setError((e) => ({...e, error}))
                if (data?.nutrition){
                setNutrition((nutrition) => [...nutrition, ...data.nutrition])
                setError(null)
            }
            // setError(null)
             //get request to /activity endpoint
             //If all goes well...
            //It should set the data as the activity state variable
            //It should set the error state variable to null
            }
        }
        
        setIsLoading(false)
        setInitialized(true)
        //next send get request to auth/me endpoint
        //if fails (.catch), error prop set to valid error message
        //if sucessful (.then) user state var set to user response and set error state var to null
        //always set (.finally) isProcessing set to false and initialized to true
    },[])

    const listNutrition = async() =>{
        const {data, error} = await apiClient.listNutrition()
        if (error) setError((e) => ({...e, error}))
        if (data?.nutrition){
            setNutrition((nutrition) => [...nutrition, {...data.nutrition}])
            setError(null)
        }
    }
    const fetchNutrition = async() => {
        const {data, error} = await apiClient.fetchNutrition()
        if (error) setError((e) => ({...e, error}))
        if (data?.nutrition){
            setNutrition((nutrition) => [...nutrition, {...data.nutrition}])
            setError(null)
        }
    }

    const createNutrition = async(form) => {
        const {data, error} = await apiClient.createNutrition(form)
        if (error) setError((e) => ({...e, error}))
        if (data?.nutrition){
            setNutrition((nutrition) => [...nutrition, {...data.nutrition}])
            setError(null)
        }
    }
    return(
        <NutritionContext.Provider value={{ createNutrition, fetchNutrition,listNutrition,nutrition, setNutrition, initialized,setInitialized,isLoading,setIsLoading,error,setError}}>
            <>{children}</>
        </NutritionContext.Provider>
    );
};

export const useNutritionContext = () => useContext(NutritionContext);
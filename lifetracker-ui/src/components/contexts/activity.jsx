import { useContext, Component, createContext, useState, useEffect } from "react";
import { useAuthContext } from "./auth";
import apiClient from "../../../services/apiClient";

const ActivityContext = createContext({});
export const ActivityContextProvider = ({children}) => {
    const [activity, setActivity] = useState();
    const [initialized, setInitialized] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const {fetchUserFromToken, user} = useAuthContext();
    useEffect(()=>{
        // check to see if a user is logged in
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
        //if user is logged in
            //set isLoading to true, errorState to null
           
            //.catch error
            //.then set activity state var, set error state to null
            //.finally set isLoading state to false, 
    }, [])
    return(
        <ActivityContext.Provider value={{activity, setActivity, initialized,setInitialized,isLoading,setIsLoading,error,setError}}>
            <>{children}</>
        </ActivityContext.Provider>
    );
};
export const useActivityContext = () => useContext(ActivityContext);
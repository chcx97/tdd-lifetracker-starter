import { useContext, Component, createContext, useState, useEffect } from "react";

const ActivityContext = createContext({});
export const ActivityContextProvider = ({children}) => {
    const [activity, setActivity] = useState();
    const [initialized, setInitialized] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    useEffect(()=>{
        // check to see if a user is logged in

        //if user is logged in
            //set isLoading to true, errorState to null
            //get request to /activity endpoint
            //.catch error
            //.then set activity state var, set error state to null
            //.finally set isLoading state to false, 
    }, [])
    return(
        <ActivityContext.Provider>
            <>{children}</>
        </ActivityContext.Provider>
    );
};
export const useActivityContext = () => useContext(ActivityContext);
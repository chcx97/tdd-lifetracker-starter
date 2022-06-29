import React from 'react'

export const AuthContext = React.createContext();

export default function AuthContextProvider(){
    const [user, setUser] = React.useState()
    const [initialized, setInitialized] = React.useState()
    const [isProcessing, setIsProcessing] = React.useState()
    const [error, setError] = React.useState()

    React.useEffect(() =>{

    },[])
    return(
        <AuthContext.Provider>
            
        </AuthContext.Provider>
    )
}
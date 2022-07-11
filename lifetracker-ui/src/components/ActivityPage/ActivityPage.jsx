import "./ActivityPage.css"
import React from "react"
import { useState } from "react"
import { useActivityContext } from "components/contexts/activity"
import { ActivityContextProvider } from "components/contexts/activity"



export default function ActivityPage() {
    const [isProcessing, setIsProcessing] = useState(false)
    // const {setIsProcessing, isProcessing} = useActivityContext();
//     const [nutritionEntry, setNutritionEntry] = useState([])
//     const [error, setError] = useState(null)
//     useEffect(()=>{
//         const fetchNutrition = async () => {
//             setIsProcessing(true)
//             const {data, error} = await apiClient.listNutrition()
//             if (data) setNutritionEntry(data.nutrition)
//         }
//     },[])
    return (
        <ActivityContextProvider>
            <div className="activity-page">
                <h1>Activity</h1>
                {isProcessing ? <Loading/> : <ActivityFeed/>}
            </div>
        </ActivityContextProvider>
    )
}

export function Loading(){
    return(
        <div className="loading">
            <h1 className="loading-message">Loading</h1>
        </div>
    )
}
export function ActivityFeed(){
    return(
        <div className="activity-feed">Activity Feed</div>
    )
}
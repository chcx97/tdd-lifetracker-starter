import "./NutritionPage.css"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "components/NotFound/NotFound"
import NutritionOverview from "components/NutritionOverview/NutritionOverview"
import NutritionNew from "components/NutritionNew/NutritionNew"
import NutritionDetail from "components/NutritionDetail/NutritionDetail"
import { NutritionContextProvider } from "components/contexts/nutrition"
export default function NutritionPage() {
    return (
        <NutritionContextProvider>
        <div className="nutrition-page">
            <div className="title">
                <h1>Nutrition</h1>
            </div>
            <Routes>
                <Route path="/" element={<NutritionOverview/>}/>
                <Route path="/create" element={<NutritionNew/>}/>
                <Route path="/id/:nutritionId" element={<NutritionDetail/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
        </NutritionContextProvider>
        
    )
}
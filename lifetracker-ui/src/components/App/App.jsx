import * as React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "components/Navbar/Navbar"
import Landing from "components/Landing/Landing"
import LoginPage from "components/LoginPage/LoginPage"
import RegistrationPage from "components/RegistrationPage/RegistrationPage"
import ActivityPage from "components/ActivityPage/ActivityPage"
import NutritionPage from "components/NutritionPage/NutritionPage"
import NotFound from "components/NotFound/NotFound"


export default function App() {
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <main>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/activity" element={<ActivityPage />}/>
            <Route path="/nutrition/*" element={<NutritionPage/>} />
            <Route path="*" element={NotFound} />
          </Routes>
          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}

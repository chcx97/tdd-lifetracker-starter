import React from 'react'
import "./NutritionOverview.css"
import { useNutritionContext } from 'components/contexts/nutrition'
import { Loading } from 'components/ActivityPage/ActivityPage';
import NutritionFeed from 'components/NutritionFeed/NutritionFeed';
import { Link } from 'react-router-dom';

export default function NutritionOverview() {
    // const {initialized,setInitialized,isLoading,setIsLoading,error,setError} = useNutritionContext()
    const {nutrition, setNutrition, initialized,setInitialized,isLoading,setIsLoading,error,setError} = useNutritionContext();
  return (
    <div className='nutrition-overview'>
      <div>
        <div className='text'>
          <h2>Overview</h2>
        </div>
          <span>
            <Link className='record' to="/create">Record Nutrition</Link>
          </span>
       </div>
        <br/>  
        <br/>
        <div>
          {error && <span className='error'></span>}
          {isLoading ? <Loading/> : <NutritionFeed/>}
        </div>
    </div>
  )
}

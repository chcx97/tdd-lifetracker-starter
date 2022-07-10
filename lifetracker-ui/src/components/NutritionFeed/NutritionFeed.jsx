import React from 'react'
import "./NutritionFeed.css"
import { useNutritionContext } from 'components/contexts/nutrition'
import NutritionCard from 'components/NutritionCard/NutritionCard';


export default function NutritionFeed() {
  const {nutrition} = useNutritionContext();
  console.log(24,nutrition)
  return (
    <div className='nutrition-feed'>
        <h3>Nutrition Feed</h3>
        {nutrition.length === 0 ? <h3>Nothing here yet</h3>: nutrition.map((nutrition) => {
          <NutritionCard/>
        })}
    </div>
  )
}

import React from 'react'
import "./NutritionCard.css"
import moment from "moment"
// import { memo } from 'react'
// import { useNutritionContext } from 'components/contexts/nutrition'


export default function NutritionCard(props) {
  // const {nutrition} = useNutritionContext()
  // const {nutrition} = props
  console.log(28, props.nutrition)
  console.log(29, props.nutrition.imageUrl)
  
  const createdAt = props.nutrition.createdAt;
  console.log(30, createdAt)
  console.log(moment(createdAt).utc().format('YYYY-MM-DD'));
  const date = moment(createdAt).utc().format('YYYY-MM-DD');
  // const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(createdAt);
  // console.log(date)
  return (
    <div className='nutrition-card'>
      {/* <h3>NutritionCard</h3> */}
      <div className='card-header'>
        <img className='image' src={props.nutrition.imageUrl}></img>
        <h4 className='name'>{props.nutrition.name}</h4>
      </div>
      <div className='card-stats'>
        <div className='CardStat'>
          <p className='card-stat-name'>Calories</p>
          <span className='card-stat-name'>{props.nutrition.calories}</span>
        </div>
        <div className='CardStat'>
          <p className='card-stat-name'>Quantity</p>
          <span className='card-stat-name'>{props.nutrition.quantity}</span>
        </div>
      </div>
      <div className='card-meta'>
        <small className='time'>{date}</small>
        <small className='category'>{props.nutrition.category}</small>
      </div>
    </div>
  )
}

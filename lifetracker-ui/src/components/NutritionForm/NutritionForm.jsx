import React from 'react'
import "./NutritionForm.css"
import { useNutritionContext } from 'components/contexts/nutrition'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NutritionForm() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [nutritionForm,setNutritionForm] = useState({name: "", category: "", quantity: 1, calories: 1, imageUrl: "" })
  const {error, isLoading, setIsLoading, createNutrition, nutrition} = useNutritionContext()
  console.log(25,error)
  console.log(27,nutrition)
  const handleOnChange = (e) => {
    setNutritionForm((f) => ({...f, [e.target.name]: e.target.value}))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors((e) => ({...e, form: null}))
    createNutrition(nutritionForm)
    if (nutrition) {
        setIsLoading(false)
        navigate("/nutrition")
    }

  }
  return (
    <div className='nutrition-form'>
        <h2 className='record-title'>Record Nutrition</h2>
        
        {Boolean(errors.form) && <span className='error'>{errors.form}</span>}
        <br/>
        <div className='form'>
        <div className='input-field'>
            <label className='nutrition-name'>Name</label>
            <input className="input" id='nutrition-name' type="text" name="name" placeholder="Nutrition name" onChange={handleOnChange} value={nutritionForm.name}></input>
        </div>
        {errors.name && <span className='error'>{errors.name}</span>}
        <div className='input-field'>
            <label className='nutrition-category'>Category</label>
            <input id='nutrition-category' className="input" type="text" name="category" placeholder="Nutrition category" onChange={handleOnChange} value={nutritionForm.category}></input>
        </div>
        {errors.category && <span className='error'>{errors.category}</span>}
        <div className='split-input-form'>
            <div className='input-field'>
                <label className='nutrition-quantity'>Quantity</label>
                <input className="input-split" id='nutrition-quantity' type="number" name="quantity" min="0" max="10000000000" onChange={handleOnChange} value={nutritionForm.quantity}></input>
            </div>
            {errors.quantity && <span className='error'>{errors.quantity}</span>}
            <div className='input-field'>
                <label className='nutrition-calories'>Calories</label>
                <input className="input-split" id='nutrition-calories' type="number" name="calories" min="0" max="10000000000" step="10" onChange={handleOnChange} value={nutritionForm.calories}></input>
            </div>
            {errors.calories && <span className='error'>{errors.calories}</span>}
        </div>
        <div className='input-field'>
            <label className='nutrition-imageUrl'>Image Url</label>
            <input className="input" id='nutrition-imageUrl' type="text" name="imageUrl" placeholder="http://www.food-image.com/1" onChange={handleOnChange} value={nutritionForm.imageUrl}></input>
        </div>
            {errors.imageUrl && <span className='error'>{errors.imageUrl}</span>}
        </div>
        {error && <span className='error'>There's a 400 or 422 error</span>}
        <div className='btn-area'>
            <button className='submit-nutrition' onClick={handleOnSubmit}>
                {isLoading ? "Loading..." : "Save"}
            </button>
        </div>
        
        
    
    </div>
  )
}

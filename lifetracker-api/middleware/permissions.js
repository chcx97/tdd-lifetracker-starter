const Nutrition = require("../models/nutrition")
const {BadRequestError, ForbiddenError} = require("../utils/errors")

// ensure authenticated user is owner of post
// if they arent, throw error
// else all good

const authedUserOwnsNutrition = async (req, res, next) =>{
   try {
    const {user} = res.locals
    const {nutritionId} = req.params
    const nutrition = await Nutrition.fetchNutritionById(nutritionId)

    if (nutrition.userEmail !== user.email){
        throw new ForbiddenError("User is not allowed to another users' nutrition entry")
    }

    res.locals.nutrition = nutrition
    
    return next()
   } catch (error) {
    return next(error)
   } 
}
module.exports = {
    authedUserOwnsNutrition
}
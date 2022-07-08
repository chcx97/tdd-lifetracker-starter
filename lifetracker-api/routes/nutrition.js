const express = require("express")
const router = express.Router()
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const permissions = require("../middleware/permissions")

router.get("/", security.requireAuthenticatedUser, async(req, res, next) => {
    try {
        // list all nutrition
        const {user} = res.locals
        const nutrition = await Nutrition.listNutritionForUser(user)
        return res.status(200).json({nutrition})
    } catch (error) {
        next(error)
    }
})

router.post("/", security.requireAuthenticatedUser, async(req, res, next) =>{
    try {
        //create new nutrition entry
        //accept a req.body with nutrition key
        //send back a json response of status 201 with "nutrition": { ... } }
        const { user } = res.locals
        console.log(6,user)
        // const { email } = res.locals.user
        const nutrition = await Nutrition.createNutrition({nutrition: req.body, user})
        return res.status(201).json({nutrition})
    } catch (error) {
        next(error)
    }
})

router.get("/:nutritionId", security.requireAuthenticatedUser, permissions.authedUserOwnsNutrition, async(req, res, next) =>{
    try {
        //return a json res back with nutrition that matches
        //nutritionId params
        const {nutritionId} = req.params
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(200).json({nutrition})
    } catch (error) {
        next(error)
    }
})

module.exports = router
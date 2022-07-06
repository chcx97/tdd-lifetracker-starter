const express = require("express")
const User = require("../models/user")
const router = express.Router()
const {createUserJwt} = require("../utils/tokens")
const security = require("../middleware/security")



router.get("/me", security.requireAuthenticatedUser, async (req, res, next)=>{
  try {
    const { email } = res.locals.user
    const user = await User.fetchUserByEmail(email)
    const publicUser = await User.createPublicUser(user)
    return res.status(200).json({ user: publicUser })
  } catch (error) {
    next(error)
  }
})
router.post("/login", async function (req, res, next) {
    try {
      const user = await User.authenticate(req.body)
      const token = createUserJwt(user)
      res.status(200).json({ user, token })
    } catch (err) {
      next(err)
    }
  })
  
  router.post("/register", async function (req, res, next) {
    try {
      const user = await User.register(req.body)
      const token = createUserJwt(user)
      res.status(201).json({ user, token })
    } catch (err) {
      next(err)
    }
  })

  

  module.exports = router
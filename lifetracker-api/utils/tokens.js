const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require("../config")

// const token = jwt.sign({email: "personal@gmail.com"}, SECRET_KEY)
// const decoded = jwt.verify(token, "wrongkey")

const generateToken = (data) => jwt.sign(data, SECRET_KEY,{ expiresIn: "24h"})

const createUserJwt = (user) =>{
    const payload = {
        email: user.email
    }
    return generateToken(payload)
}

const validateToken = (token) => {
    try{
        const decoded = jwt.verify(token, SECRET_KEY)
        return decoded
    }catch(err){
        return {}
    }
}
module.exports = {
    generateToken,
    validateToken,
    createUserJwt
}

// const testTokens = () => {
//     const user = {email: "person@gmail.com"}

//     const token = generateToken(user)
//     console.log("token", token)
//     const validatedToken = validateToken(token)
//     console.log("validatedToken", validatedToken)
// }

// testTokens()
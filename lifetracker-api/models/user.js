const db = require("../db")
const bcrypt = require("bcrypt")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")
const { BCRYPT_WORK_FACTOR } = require("../config")

class User {
  /**
   * Convert a user from the database into a user object that can be viewed publically.
   * Don't show user's password
   *
   *
   * @param {User} user - user from database
   * @returns public user
   */
  static createPublicUser(user) {
    return {
      username: user.username,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      createdAt: user.created_at
    }
  }

  /**
   * Authenticate user with email and password.
   *
   * Throws UnauthorizedError if user not found or wrong password.
   *
   * @returns user
   **/

  static async authenticate(creds) {
    const requiredCreds = ["email", "password"]
    requiredCreds.forEach((property) =>{
      if (!creds.hasOwnProperty(property)){
        throw new BadRequestError(`Missing ${property} in request.`)
      }
    })
    

    const user = await User.fetchUserByEmail(creds.email)

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(creds.password, user.password)
      if (isValid === true) {
        return User.createPublicUser(user)
      }
    }

    throw new UnauthorizedError("Invalid username/password")
  }

  /**
   * Register user with data.
   *
   * Throws BadRequestError on duplicates.
   *
   * @returns user
   **/

  static async register(creds) {
    const requiredCreds = ["email", "password", "firstName", "lastName","username"];
    requiredCreds.forEach((property) =>{
      if (!creds.hasOwnProperty(property)){
      throw new BadRequestError(`Missing ${property} in request body.`)
    }
    })

    if (creds.email.indexOf("@") <= 0){
      throw new BadRequestError("Invalid email.")
    }

    const existingUserWithEmail = await User.fetchUserByEmail(creds.email)
    if (existingUserWithEmail) {
      throw new BadRequestError(`Duplicate email: ${creds.email}`)
    }

    const hashedPassword = await bcrypt.hash(creds.password, BCRYPT_WORK_FACTOR)
    const normalizedEmail = creds.email.toLowerCase()

      const result = await db.query(
        `INSERT INTO users (
            username,
            password,
            first_name,
            last_name,
            email
          )
          VALUES ($1, $2, $3, $4, $5)
          RETURNING id,
                    username,         
                    password,
                    first_name, 
                    last_name,
                    email,
                    created_at
                    `,
        [creds.username, hashedPassword, creds.firstName, creds.lastName, normalizedEmail]
        
      )
      const user = result.rows[0]
      return User.createPublicUser(user)
    
   
  }

  /**
   * Fetch a user in the database by email
   *
   * @param {String} email
   * @returns user
   */
  static async fetchUserByEmail(email) {
    if (!email){
      throw new BadRequestError("No email provided")
    }
    const query = `SELECT * FROM users WHERE email = $1`
    
    const result = await db.query(query, [email.toLowerCase()])
    
    const user = result.rows[0]

    return user
  }

  /**
   * Fetch a user in the database by username
   *
   * @param {String} username
   * @returns user
   */
  static async fetchById(username) {
    const result = await db.query(
      `SELECT * FROM users WHERE username = $1`,
      [username]
    )

    const user = result.rows[0]

    return user
  }
}

module.exports = User
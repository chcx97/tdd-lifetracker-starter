const {BadRequestError, NotFoundError} = require("../utils/errors")
const db = require("../db")

class Nutrition{

    static async createNutrition({nutrition, user}){
        const requiredFields = ["name", "category", "calories", "imageUrl", "quantity"];
        requiredFields.forEach((property) =>{
            if (!nutrition.hasOwnProperty(property)){
            throw new BadRequestError(`Missing ${property} in request body.`)
          }
          })
          
          if (!nutrition.quantity){
            nutrition.quantity = 1
          }

          const result = await db.query(
            `INSERT INTO nutrition (
                name,
                category,
                calories,
                quantity,
                image_url,
                user_id
              )
              VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE email = $6))
              RETURNING
                id,
                name,
                category,
                calories,
                quantity,
                image_url   AS "imageUrl",
                created_at  AS "createdAt",
                user_id     AS "userId",
                updated_at  AS "updatedAt"
                        `,
            [nutrition.name, nutrition.category, nutrition.calories, nutrition.quantity, nutrition.imageUrl, user.email]
            
          )
          const nutritionEntry = result.rows[0]

          return nutritionEntry
    }

    static async fetchNutritionById(id){
        if (!id){
            throw new BadRequestError("No id provided")
        }
        const query = `SELECT  nutrition.id,
            nutrition.name,
            nutrition.user_id       AS "userId",
            u.email                 AS "userEmail",
            nutrition.category,
            nutrition.calories,
            nutrition.quantity,
            nutrition.image_url     AS "imageUrl",
            nutrition.created_at    AS "createdAt",
            nutrition.updated_at    AS "updatedAt"
        FROM nutrition
            JOIN users AS u ON u.id = nutrition.user_id
        WHERE nutrition.id = $1
        ORDER BY nutrition.created_at DESC
        `
        const result = await db.query(query, [id])

        const nutrition = result.rows[0]

        if (!nutrition){
            throw new NotFoundError("No nutrition found with that id.")
        }
        return nutrition
    }
    static async listNutritionForUser(user) {
        console.log(7,user)
        const query = `
            SELECT  nutrition.id,
                    nutrition.name,
                    nutrition.category,
                    nutrition.calories,
                    nutrition.quantity,
                    nutrition.image_url     AS "imageUrl",
                    nutrition.created_at    AS "createdAt",
                    nutrition.user_id       AS "userId",
                    u.email                 AS "userEmail",
                    nutrition.updated_at    AS "updatedAt"
            FROM nutrition
                JOIN users AS u ON u.id = nutrition.user_id
            WHERE u.email = $1
            ORDER BY nutrition.created_at DESC
        `
        const results = await db.query(query, [user.email])
        return results.rows
    }
}

module.exports = Nutrition
import { database } from "../../database";
import { AppError } from "../../Errors/errors";
import { returnProductSchema} from "../../Schemas/schema.products";





export const updateProductsService = async (newDate, id) =>{
 


    const verifId = await database.query(
        `SELECT
            *
        FROM
            products
        WHERE
            id = $1;`,
        [id]
    )

    if(verifId.rowCount === 0){

        throw new AppError('Products not existis', 409)
    }

    let query = `UPDATE products set`
    const keys = Object.keys(newDate)
    const values = Object.values(newDate)

    keys.forEach((key, index) => {
        query += ` ${key} = \$${index+=1}, `
    })

    query = query.slice(0, -2)

    query += ` WHERE id = \$${keys.length+=1} RETURNING *;`


    const queryResponse = await database.query(
        query,  
        [...values, id]
    )

    const responseUser = await returnProductSchema.validate(queryResponse.rows[0])

    return responseUser;
};

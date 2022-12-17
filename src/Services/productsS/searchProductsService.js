import { database } from "../../database";

import { returnProductSchema} from "../../Schemas/schema.products";



export const searchProductsService = async (id) =>{
 
    const verifId = await database.query(
        `SELECT
            *
        FROM
            products
        WHERE
            id = $1;`,
        [id]
    )

    if(!verifId.rowCount > 0){

        throw new Error('Products not existis')
    }

   
    const responseUser = await returnProductSchema.validate(verifId.rows[0]);


   return responseUser

}

import { database } from "../../database";
import { createProductSchema } from "../../Schemas/schema.products";


export const createProductsService = async (date) =>{

    const shemaDate = await createProductSchema.validate(date)

    const verifUnique = await database.query(
        `SELECT
            *
        FROM
            products
        WHERE
            name = $1;`,
        [shemaDate.name]
    )

   
    if(verifUnique.rowCount > 0){

       throw new Error('Products alredy existi')
    }

 
    const response = await database.query(
        'INSERT INTO products (name, price, category_id ) VALUES ($1, $2, $3) RETURNING *;',
        [shemaDate.name, shemaDate.price, shemaDate.category_id]
    )

       
    return  response.rows[0]
};

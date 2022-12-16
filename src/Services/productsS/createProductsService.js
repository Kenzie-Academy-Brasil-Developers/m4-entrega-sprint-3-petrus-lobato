import { database } from "../../database";
import { AppError } from "../../Errors/errors";
import { returnProductSchema} from "../../Schemas/schema.products";


export const createProductsService = async (date) =>{

   
    const verifUnique = await database.query(
        `SELECT
            *
        FROM
            products
        WHERE
            name = $1;`,
        [date.name]
    )

    
    if(verifUnique.rowCount > 0){
   
      throw new AppError('User already exists!', 400)
    }
 
    const response = await database.query(
        'INSERT INTO products (name, price, category_id ) VALUES ($1, $2, $3) RETURNING *;',
        [date.name, date.price, date.category_id]
    )

    const responseUser = await returnProductSchema.validate(response.rows[0])

    return  responseUser;
};

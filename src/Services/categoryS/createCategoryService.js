import { database } from '../../database';
import {AppError} from '../../Errors/errors';
import { returnCategorySchema } from '../../Schemas/schema.category';

export const createCategoryService = async (date) =>{ 

    const verifUnique = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            name = $1;`,
        [date.name]
    )

    
    if(verifUnique.rowCount > 0){

      throw new AppError('User already exists!')
    }

    const response = await database.query(
        'INSERT INTO categories (name) VALUES ($1) RETURNING *;',
        [date.name]
    )

    const responseUser = await returnCategorySchema.validate(response.rows[0])

    return  responseUser;
   
};
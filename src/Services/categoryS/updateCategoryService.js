import { database } from '../../database';
import {AppError} from '../../Errors/errors';
import {returnCategorySchema } from '../../Schemas/schema.category';




export const updateCategoryService = async (newDate, id ) =>{

    const verifId = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            id = $1;`,
        [id]
    )

    if(!verifId.rowCount > 0){

        throw new AppError('Category not existis')
    }

    const updateId = await database.query(

        `UPDATE categories SET name = $1 
        WHERE id = $2
        RETURNING *;`,
        [newDate.name, id]
    )

    const responseUser = await returnCategorySchema.validate(updateId.rows[0])

    return responseUser;
};

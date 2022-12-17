import { database } from '../../database';
import {AppError} from '../../Errors/errors';
import { returnCategorySchema } from '../../Schemas/schema.category';



export const searchCategoryService = async (id) =>{

    const verifId = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            id = $1;`,
        [id]
    )

    if(verifId.rowCount == 0){

        throw new AppError('Category not existis')
    }

    const responseUser = await returnCategorySchema.validate(verifId.rows[0]);

    return responseUser
};
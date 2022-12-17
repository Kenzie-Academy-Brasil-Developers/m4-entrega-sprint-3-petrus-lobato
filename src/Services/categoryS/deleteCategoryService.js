import { database } from '../../database';
import {AppError} from '../../Errors/errors';




export const deleteCategoryService =  async (id) =>{

    const verifId = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            id = $1;`,
        [id]
    )



    if(verifId.rowCount <= 0){

          throw new Error('Category not existis')
    }

    const deleteId = await database.query(

        `DELETE FROM categories WHERE id = $1 RETURNING *;`, [id]
        )

        return {}


  
};

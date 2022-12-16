
import { database } from '../../database';

import { listCategorySchema } from '../../Schemas/schema.category';



export const searchesCategoryService = async () =>{

    const response = await database.query(
        'SELECT * FROM categories;'
    )

    const responseUser = await listCategorySchema.validate(response.rows);

   return responseUser;


};
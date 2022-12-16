import { database } from '../database';
import {AppError} from '../Errors/errors';
import { listCategorySchema, returnCategorySchema } from '../Schemas/schema.category';




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

      throw new AppError('User already exists!', 409)
    }

    const response = await database.query(
        'INSERT INTO categories (name) VALUES ($1) RETURNING *;',
        [date.name]
    )

    const responseUser = await returnCategorySchema.validate(response.rows[0])

    return  responseUser;
   
};

export const searchesCategoryService = async () =>{

    const response = await database.query(
        'SELECT * FROM categories;'
    )

    const responseUser = await listCategorySchema.validate(response.rows);

   return responseUser;


};

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

    if(!verifId.rowCount > 0){

        throw new AppError('Category not existis', 409)
    }

    const responseUser = await returnCategorySchema.validate(verifId.rows[0]);

    return responseUser
};

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

        throw new AppError('Category not existis', 409)
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

    if(!verifId.rowCount > 0){

        throw new AppError('Category not existis', 409)
    }

    const deleteId = await database.query(

        `DELETE FROM categories WHERE id = $1 RETURNING *;`, [id]
    )

    return {}

};














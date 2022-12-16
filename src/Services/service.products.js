import { database } from "../database";
import { AppError } from "../Errors/errors";
import { returnProductSchema, listProductSchema} from "../Schemas/schema.products";


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

      throw new AppError('User already exists!', 409)
    }

    const response = await database.query(
        'INSERT INTO products (name, price, id_category ) VALUES ($1, $2, $3) RETURNING *;',
        [date.name, date.price, date.id_category]
    )

    const responseUser = await returnProductSchema.validate(response.rows[0])

    return  responseUser;
};



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

        throw new AppError('Products not existis', 409)
    }

   
    const responseUser = await returnProductSchema.validate(verifId.rows[0]);


   return responseUser

}


export const searchesProductsService =  async() =>{

    const response = await database.query(
        'SELECT * FROM products;'
    )

    const responseUser = await listProductSchema.validate(response.rows);

    return responseUser;
};



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

    if(!verifId.rowCount > 0){

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

    console.log(query)

    const queryResponse = await database.query(
        query,  
        [...values, id]
    )

    const responseUser = await returnProductSchema.validate(queryResponse.rows[0])

    return responseUser;
};



export const deleteProductsService = async (id) =>{

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

        throw new AppError('Products not existis', 409)
    }

    const deleteId = await database.query(

        `DELETE FROM products WHERE id = $1 RETURNING *;`, [id]
    )

    return {}
};


export const filterProductsService = async (idCategory) =>{

    const verifId = await database.query(
        `SELECT
            *
        FROM
            categories
        WHERE
            id = $1;`,
        [idCategory]
    )

    if(!verifId.rowCount > 0){

        throw new AppError('Category not existis', 409)
    }

    const verifProduct = await database.query(
        `
        SELECT 
            p."name", 
            p.price, 
            c."name" category 
        FROM 
            products p
            JOIN categories c ON p.id_category = c.id
        WHERE 
            p.id_category = $1;`,
        [idCategory]
        
    )

    
    if(!verifProduct.rowCount > 0){
        throw new AppError("unregistered product!", 404)
    }

    
    return verifProduct.rows
};
import { database } from "../../database";
import { AppError } from "../../Errors/errors";



export const filterProductsService = async (idCategory) =>{

    const verifId = await database.query(
        `SELECT
            *
        FROM
            products
        WHERE
        category_id = $1;`,
        [idCategory]
    )

 

    if(!verifId.rowCount > 0){
        console.log('-------------Entrou')
        throw new Error('Category not existis')
    }

    const verifProduct = await database.query(
        `
        SELECT 
            p."name", 
            p.price, 
            c."name" category 
        FROM 
            products p
            JOIN categories c ON p.category_id = c.id
        WHERE 
            p.category_id = $1;`,
        [idCategory]
        
    )

   

    
    if(!verifProduct.rowCount > 0){
        throw new AppError("unregistered product!", 404)
    }

    
    return verifProduct.rows
};
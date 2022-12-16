import { database } from "../../database";
import { AppError } from "../../Errors/errors";



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

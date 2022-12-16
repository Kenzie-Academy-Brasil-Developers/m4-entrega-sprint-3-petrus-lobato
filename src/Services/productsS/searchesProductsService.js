import { database } from "../../database";
import { listProductSchema} from "../../Schemas/schema.products";




export const searchesProductsService =  async() =>{

    const response = await database.query(
        'SELECT * FROM products;'
    )

    const responseUser = await listProductSchema.validate(response.rows);

    return responseUser;
};

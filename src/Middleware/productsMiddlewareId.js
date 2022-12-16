import { database } from "../database";
import { AppError } from "../Errors/errors";

const productsdMiddlewareId = async (req, res, next) => {

   
    const responseId = await database.query(
        `
        SELECT *
        FROM products
        WHERE id = $1
      `,
        [req.params.id],
      );
    
      
      if (responseId.rows[0] === 0) {
        throw new AppError('Product not found', 404);
      }
      
      req.id = responseId.rows[0].id;

      return next();

}

export default productsdMiddlewareId
import { AppError } from "../../Errors/errors";
import { filterProductsService } from "../../Services/productsS/filterProductsService";





export const filterProductsController = async ( req, res) =>{
    try {
        const response = await filterProductsService(req.params.category_id);
  
        return res.status(200).json(response);
    } catch (error) {

        throw new AppError(error.message, 404);
        
    }
    
};
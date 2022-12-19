import { AppError } from "../../Errors/errors";
import { searchProductsService } from "../../Services/productsS/searchProductsService";




export const searchProductsController = async ( req, res) =>{

    try {
        const response = await searchProductsService(req.params.id);

        return res.status(200).json(response);
        
    } catch (error) {
        throw new AppError(error.message, 404);
 
    }
    
};

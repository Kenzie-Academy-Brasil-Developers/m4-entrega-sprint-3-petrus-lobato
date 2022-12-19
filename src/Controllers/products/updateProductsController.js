import { AppError } from "../../Errors/errors";
import { updateProductsService } from "../../Services/productsS/updateProductsService";

export const updateProductsController = async ( req, res) =>{

    try {
        const  response = await updateProductsService(req.body, req.params.id );
  
        return res.status(200).json(response);
    } catch (error) {
        
        throw new AppError(error.message, 404);
       
    }
    
};

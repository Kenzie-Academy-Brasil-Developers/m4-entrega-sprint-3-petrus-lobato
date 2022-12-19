import { AppError } from "../../Errors/errors";
import { deleteProductsService } from "../../Services/productsS/deleteProductsService";




export const deleteProductsController = async ( req, res) =>{

    try {

        const response = await deleteProductsService(req.params.id);
  
        return res.status(204).json(response);

    } catch (error) {
        throw new AppError(error.message, 404);
        
    }
};
import { AppError } from "../../Errors/errors";
import { deleteCategoryService } from "../../Services/categoryS/deleteCategoryService";




export const deleteCategoryController = async ( req, res ) =>{

    try {

        const response = await deleteCategoryService(req.params.id);
  
  
        return res.status(204).json(response);

    } catch (error) {
        throw new AppError(error.message, 404);
   
    }

    
};
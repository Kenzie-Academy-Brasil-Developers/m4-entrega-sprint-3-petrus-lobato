import { AppError } from "../../Errors/errors";
import { updateCategoryService } from "../../Services/categoryS/updateCategoryService";



export const updateCategoryController = async ( req, res ) =>{
   
    try {
        const  response = await updateCategoryService( req.validatedBody, req.id );

        return res.status(200).json(response);
    } catch (error) {
        throw new AppError(error.message, 404);  
    }
    
};

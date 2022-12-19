import { AppError } from "../../Errors/errors";
import { createCategoryService } from "../../Services/categoryS/createCategoryService";


export const createCategoryController = async ( req, res ) =>{

    try {

         const response = await createCategoryService(req.validatedBody);
  
        return res.status(201).json(response);
        
    } catch (error) {
        throw new AppError(error.message, 400);
        
        
    }
   
};


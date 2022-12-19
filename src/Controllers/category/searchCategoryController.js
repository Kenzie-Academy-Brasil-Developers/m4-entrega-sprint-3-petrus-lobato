import { AppError } from "../../Errors/errors";
import { searchCategoryService } from "../../Services/categoryS/searchCategoryService";



export const searchCategoryController = async ( req, res ) =>{
    
    try {

        const  response = await searchCategoryService(req.id);
  
        return res.status(200).json(response);
        
    } catch (error) {
        throw new AppError(error.message, 404);
     
    }
    
};
import { createCategoryService } from "../../Services/categoryS/createCategoryService";




export const createCategoryController = async ( req, res ) =>{

    try {

         const response = await createCategoryService(req.validatedBody);
  
        return res.status(201).json(response);
    } catch (error) {
        return res.status(400).json({message: error.message})
        
    }
   
};


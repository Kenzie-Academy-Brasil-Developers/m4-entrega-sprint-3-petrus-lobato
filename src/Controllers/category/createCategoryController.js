import { createCategoryService } from "../../Services/categoryS/createCategoryService";




export const createCategoryController = async ( req, res ) =>{
   
    const response = await createCategoryService(req.validatedBody);
  
    return res.status(201).json(response);
};


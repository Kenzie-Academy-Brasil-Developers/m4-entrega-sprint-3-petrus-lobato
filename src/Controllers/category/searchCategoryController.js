import { searchCategoryService } from "../../Services/categoryS/searchCategoryService";



export const searchCategoryController = async ( req, res ) =>{
    
    const  response = await searchCategoryService(req.id);
  
    return res.status(200).json(response);
};
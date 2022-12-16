import { deleteCategoryService } from "../../Services/categoryS/deleteCategoryService";




export const deleteCategoryController = async ( req, res ) =>{

    const response = await deleteCategoryService(req.id);
  
  
    return res.status(204).json(response);
};
import { deleteCategoryService } from "../../Services/categoryS/deleteCategoryService";




export const deleteCategoryController = async ( req, res ) =>{

    try {

        const response = await deleteCategoryService(req.params.id);
  
  
        return res.status(204).json(response);

    } catch (error) {
        return res.status(404).json({message: error.message})
    }

    
};
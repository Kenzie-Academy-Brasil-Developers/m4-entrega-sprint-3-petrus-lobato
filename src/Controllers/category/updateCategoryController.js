import { updateCategoryService } from "../../Services/categoryS/updateCategoryService";



export const updateCategoryController = async ( req, res ) =>{
   
    try {
        const  response = await updateCategoryService( req.validatedBody, req.id );

        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
    
};

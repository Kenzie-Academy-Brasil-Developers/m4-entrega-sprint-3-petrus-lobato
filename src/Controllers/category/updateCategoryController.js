import { updateCategoryService } from "../../Services/categoryS/updateCategoryService";



export const updateCategoryController = async ( req, res ) =>{
   
    const  response = await updateCategoryService( req.validatedBody, req.id );

    return res.status(200).json(response);
};

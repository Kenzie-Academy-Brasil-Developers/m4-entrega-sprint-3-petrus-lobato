import { updateProductsService } from "../../Services/productsS/updateProductsService";




export const updateProductsController = async ( req, res) =>{

    const  response = await updateProductsService(req.validatedBody, req.id );
  
  
    return res.status(200).json(response);
};

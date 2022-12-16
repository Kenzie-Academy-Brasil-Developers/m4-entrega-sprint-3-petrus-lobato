import { deleteProductsService } from "../../Services/productsS/deleteProductsService";




export const deleteProductsController = async ( req, res) =>{

    const  response = await deleteProductsService(req.id);
  
  
    return res.status(204).json(response);
};
import { deleteProductsService } from "../../Services/productsS/deleteProductsService";




export const deleteProductsController = async ( req, res) =>{

    try {

        const response = await deleteProductsService(req.params.id);
  
  
        return res.status(204).json(response);

    } catch (error) {
        return res.status(404).json({message: error.message})
    }
};
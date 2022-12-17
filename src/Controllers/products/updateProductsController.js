import { updateProductsService } from "../../Services/productsS/updateProductsService";




export const updateProductsController = async ( req, res) =>{

    try {
        const  response = await updateProductsService(req.body, req.params.id );
  
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
    
};

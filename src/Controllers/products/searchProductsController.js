import { searchProductsService } from "../../Services/productsS/searchProductsService";




export const searchProductsController = async ( req, res) =>{

    try {
        const response = await searchProductsService(req.params.id);

        return res.status(200).json(response);
        
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
    
};

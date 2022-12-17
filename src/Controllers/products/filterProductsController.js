import { filterProductsService } from "../../Services/productsS/filterProductsService";





export const filterProductsController = async ( req, res) =>{
    try {
        const response = await filterProductsService(req.params.category_id);
  
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
    
};
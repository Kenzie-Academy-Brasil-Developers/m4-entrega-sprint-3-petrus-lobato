import { filterProductsService } from "../../Services/productsS/filterProductsService";





export const filterProductsController = async ( req, res) =>{

    const response = await filterProductsService(req.params.category_id);
  
    return res.status(200).json(response);
};
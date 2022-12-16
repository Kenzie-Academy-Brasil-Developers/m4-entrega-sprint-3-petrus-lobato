import { searchProductsService } from "../../Services/productsS/searchProductsService";




export const searchProductsController = async ( req, res) =>{

    const response = await searchProductsService(req.id);


    return res.status(200).json(response);
};

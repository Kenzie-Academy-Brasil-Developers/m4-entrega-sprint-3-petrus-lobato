import { AppError } from "../../Errors/errors";
import { searchesProductsService } from "../../Services/productsS/searchesProductsService";




export const searchesProductsController =  async ( req, res) =>{
    try {
        const  response = await searchesProductsService();
    
        return res.status(200).json(response);
    } catch (error) {
        throw new AppError(error.message, 404);
        
    }
    
};
import { searchesProductsService } from "../../Services/productsS/searchesProductsService";




export const searchesProductsController =  async ( req, res) =>{
    try {
        const  response = await searchesProductsService();
    
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
    
};
import { searchesProductsService } from "../../Services/productsS/searchesProductsService";




export const searchesProductsController =  async ( req, res) =>{

    const  response = await searchesProductsService();
  
    return res.status(200).json(response);
};
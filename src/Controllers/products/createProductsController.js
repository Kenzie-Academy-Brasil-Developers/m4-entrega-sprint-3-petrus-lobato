
import { createProductsService } from "../../Services/productsS/createProductsService";



export const createProductsController = async ( req, res) =>{
    const dateBody = req.body
    try {
        const response = await createProductsService(dateBody);
  
        return res.status(201).json(response);

    } catch (error) {
        return res.status(400).json({message: error.message});
    }
 
};
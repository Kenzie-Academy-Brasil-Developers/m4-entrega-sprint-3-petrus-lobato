
import { AppError } from "../../Errors/errors";
import { createProductsService } from "../../Services/productsS/createProductsService";



export const createProductsController = async ( req, res) =>{
    const dateBody = req.body
    try {
        const response = await createProductsService(dateBody);
  
        return res.status(201).json(response);

    } catch (error) {
    
        throw new AppError(error.message, 400);
    }
 
};
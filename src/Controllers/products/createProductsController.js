import { createProductsService } from "../../Services/productsS/createProductsService";



export const createProductsController = async ( req, res) =>{

    const response = await createProductsService(req.validatedBody);
  
    return res.status(201).json(response);
};
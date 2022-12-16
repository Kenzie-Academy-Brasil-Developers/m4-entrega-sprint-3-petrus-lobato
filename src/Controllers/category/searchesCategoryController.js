
import { searchesCategoryService } from "../../Services/categoryS/searchesCategoryService";


export const searchesCategoryController = async ( req, res ) =>{

    const  response = await searchesCategoryService();
  

    return res.status(200).json(response);

};
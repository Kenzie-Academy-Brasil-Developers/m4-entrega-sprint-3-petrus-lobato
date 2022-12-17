
import { searchesCategoryService } from "../../Services/categoryS/searchesCategoryService";


export const searchesCategoryController = async ( req, res ) =>{

    try {

        const  response = await searchesCategoryService();
  

        return res.status(200).json(response);
        
    } catch (error) {

        return res.status(400).json({message: error.message});
    }

};
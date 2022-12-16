import {createCategoryService, searchesCategoryService, searchCategoryService, updateCategoryService, deleteCategoryService} from '../Services/service.category'




export const createCategoryController = async ( req, res ) =>{
   
    const response = await createCategoryService(req.validatedBody);
  
    return res.status(201).json(response);
};

export const searchesCategoryController = async ( req, res ) =>{

    const  response = await searchesCategoryService();
  
  
    return res.status(200).json(response);
};

export const searchCategoryController = async ( req, res ) =>{
    
    const  response = await searchCategoryService(req.params.id);
  
    return res.status(200).json(response);
};

export const updateCategoryController = async ( req, res ) =>{

    const  response = await updateCategoryService( req.validatedBody, req.params.id );

    return res.status(200).json(response);
};

export const deleteCategoryController = async ( req, res ) =>{

    const response = await deleteCategoryService(req.params.id);
  
  
    return res.status(204).json(response);
};
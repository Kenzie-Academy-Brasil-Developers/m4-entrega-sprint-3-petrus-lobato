import { createProductsService, searchProductsService, searchesProductsService, updateProductsService, deleteProductsService, filterProductsService} from '../Services/service.products'



export const createProductsController = async ( req, res) =>{

    const response = await createProductsService(req.validatedBody);
  
    return res.status(201).json(response);
};


export const searchesProductsController =  async ( req, res) =>{

    const  response = await searchesProductsService();
  
    return res.status(200).json(response);
};



export const searchProductsController = async ( req, res) =>{

    const response = await searchProductsService(req.params.id);

    console.log(response)
  
  
    return res.status(200).json(response);
};


export const updateProductsController = async ( req, res) =>{

    const  response = await updateProductsService(req.validatedBody, req.params.id );
  
  
    return res.status(200).json(response);
};


export const deleteProductsController = async ( req, res) =>{

    const  response = await deleteProductsService(req.params.id);
  
  
    return res.status(204).json(response);
};


export const filterProductsController = async ( req, res) =>{

    const response = await filterProductsService(req.params.id_category);
  
    return res.status(200).json(response);
};
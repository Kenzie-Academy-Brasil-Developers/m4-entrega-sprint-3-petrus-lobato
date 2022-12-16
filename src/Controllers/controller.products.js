import { createProductsService, searchProductsService, searchesProductsService, updateProductsService, deleteProductsService, filterProductsService} from '../Services/service.products'



export const createProductsController = ( req, res) =>{

    const [ status, response] = createProductsService();
  
  
    return res.status(status).json(response);
};


export const searchesProductsController = ( req, res) =>{

    const [ status, response] = searchesProductsService();
  
  
    return res.status(status).json(response);
};



export const searchProductsController = ( req, res) =>{

    const [ status, response] = searchProductsService();
  
  
    return res.status(status).json(response);
};


export const updateProductsController = ( req, res) =>{

    const [ status, response] = updateProductsService();
  
  
    return res.status(status).json(response);
};


export const deleteProductsController = ( req, res) =>{

    const [ status, response] = deleteProductsService();
  
  
    return res.status(status).json(response);
};


export const filterProductsController = ( req, res) =>{

    const [ status, response] = filterProductsService();
  
  
    return res.status(status).json(response);
};
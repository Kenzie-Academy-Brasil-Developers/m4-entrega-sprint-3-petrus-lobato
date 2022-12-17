import {Router} from 'express';
import { createProductsController } from '../Controllers/products/createProductsController';
import { deleteProductsController } from '../Controllers/products/deleteProductsController';
import { filterProductsController } from '../Controllers/products/filterProductsController';
import { searchProductsController} from '../Controllers/products/searchProductsController';
import { searchesProductsController } from '../Controllers/products/searchesProductsController';
import { updateProductsController } from '../Controllers/products/updateProductsController';


const productsRoute = Router();

productsRoute.post('', createProductsController);

productsRoute.get('', searchesProductsController);

productsRoute.get('/:id', searchProductsController);

productsRoute.patch('/:id', updateProductsController);

productsRoute.delete('/:id', deleteProductsController);

productsRoute.get('/category/:category_id', filterProductsController);


export default productsRoute;
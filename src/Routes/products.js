import {Router} from 'express';
import { createProductsController, searchesProductsController, searchProductsController, updateProductsController, deleteProductsController, filterProductsController } from '../Controllers/controller.products';

const productsRoute = Router();

productsRoute.post('', createProductsController);

productsRoute.get('', searchesProductsController);

productsRoute.get('/:id', searchProductsController);

productsRoute.patch('/:id', updateProductsController);

productsRoute.delete('/:id', deleteProductsController);

productsRoute.get('/category/:id_category', filterProductsController);


export default productsRoute;
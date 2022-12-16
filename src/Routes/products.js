import {Router} from 'express';
import { createProductsController, searchesProductsController, searchProductsController, updateProductsController, deleteProductsController, filterProductsController } from '../Controllers/controller.products';
import validatedMiddleware from '../Middleware/validated.middleware';
import { createProductSchema } from '../Schemas/schema.products';

const productsRoute = Router();

productsRoute.post('',validatedMiddleware(createProductSchema) ,  createProductsController);

productsRoute.get('', searchesProductsController);

productsRoute.get('/:id', searchProductsController);

productsRoute.patch('/:id', validatedMiddleware(createProductSchema), updateProductsController);

productsRoute.delete('/:id', deleteProductsController);

productsRoute.get('/category/:id_category', filterProductsController);


export default productsRoute;
import {Router} from 'express';
import { createProductsController } from '../Controllers/products/createProductsController';
import { deleteProductsController } from '../Controllers/products/deleteProductsController';
import { filterProductsController } from '../Controllers/products/filterProductsController';
import { searchProductsController} from '../Controllers/products/searchProductsController';
import { searchesProductsController } from '../Controllers/products/searchesProductsController';
import { updateProductsController } from '../Controllers/products/updateProductsController';

import validatedMiddleware from '../Middleware/validated.middleware';
import { createProductSchema, returuptadeProducttSchema } from '../Schemas/schema.products';
import productsdMiddlewareId from '../Middleware/productsMiddlewareId';



const productsRoute = Router();

productsRoute.post('',validatedMiddleware(createProductSchema),  createProductsController);

productsRoute.get('', searchesProductsController);

productsRoute.get('/:id', productsdMiddlewareId, searchProductsController);

productsRoute.patch('/:id', productsdMiddlewareId, validatedMiddleware(returuptadeProducttSchema), updateProductsController);

productsRoute.delete('/:id', productsdMiddlewareId, deleteProductsController);

productsRoute.get('/category/:category_id', filterProductsController);


export default productsRoute;
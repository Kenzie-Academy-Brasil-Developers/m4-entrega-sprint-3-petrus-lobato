import {Router} from 'express';
import { createCategoryController } from '../Controllers/category/createCategoryController';
import { deleteCategoryController } from '../Controllers/category/deleteCategoryController';
import { searchCategoryController } from '../Controllers/category/searchCategoryController';
import {searchesCategoryController } from '../Controllers/category/searchesCategoryController';
import { updateCategoryController } from '../Controllers/category/updateCategoryController';
import validatedMiddlewareId from '../Middleware/validade.id.middleware';
import validatedMiddleware from '../Middleware/validated.middleware';
import { createCategorySchema } from '../Schemas/schema.category';

const categoryRoute = Router();


categoryRoute.post('', validatedMiddleware(createCategorySchema),createCategoryController);

categoryRoute.get('', searchesCategoryController);

categoryRoute.get('/:id', validatedMiddlewareId, searchCategoryController);

categoryRoute.patch('/:id', validatedMiddlewareId, validatedMiddleware(createCategorySchema), updateCategoryController);

categoryRoute.delete('/:id', validatedMiddlewareId, deleteCategoryController);



export default categoryRoute;
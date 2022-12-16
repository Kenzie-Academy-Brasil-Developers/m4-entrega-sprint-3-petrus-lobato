import {Router} from 'express';
import { createCategoryController, searchesCategoryController, searchCategoryController, updateCategoryController, deleteCategoryController } from '../Controllers/controller.category';
import validatedMiddleware from '../Middleware/validated.middleware';
import { createCategorySchema } from '../Schemas/schema.category';

const categoryRoute = Router();


categoryRoute.post('', validatedMiddleware(createCategorySchema) ,createCategoryController);

categoryRoute.get('', searchesCategoryController);

categoryRoute.get('/:id', searchCategoryController);

categoryRoute.patch('/:id', validatedMiddleware(createCategorySchema), updateCategoryController);

categoryRoute.delete('/:id', deleteCategoryController);



export default categoryRoute;
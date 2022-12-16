import 'express-async-errors';
import express, {json} from "express";
import categoryRoute from "./Routes/category";
import productsRoute from "./Routes/products";
import { errorGlobal } from './Errors/errors';

const app = express();
app.use(json());

app.use('/categories', categoryRoute);
app.use('/products', productsRoute);
app.use(errorGlobal);


export default app

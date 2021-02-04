import {Router} from 'express';

const routes = Router();

//import Routes
import userRoutes from './userRoutes';

//Routes
routes.use('/users', userRoutes);

export default routes;
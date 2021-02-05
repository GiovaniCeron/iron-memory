import {Router} from 'express';

const routes = Router();

//import Routes
import userRoutes from './userRoutes';
import deckRoutes from './deckRoutes';

//import middlewares
import AuthMiddleware from '../middlewares/AuthMiddleware';

//Routes
routes.use('/users', userRoutes);
routes.use('/decks', AuthMiddleware, deckRoutes);

export default routes;
import {Router} from 'express';

const routes = Router();

//import Routes
import userRoutes from './userRoutes';
import deckRoutes from './deckRoutes';
import cardRoutes from './cardsRoutes';
import learnRoutes from './learningRoutes';

//import middlewares
import AuthMiddleware from '../middlewares/AuthMiddleware';

//Routes
routes.use('/users', userRoutes);
routes.use('/decks', AuthMiddleware, deckRoutes);
routes.use('/cards', AuthMiddleware, cardRoutes);
routes.use('/learn', AuthMiddleware, learnRoutes);

export default routes;
import {Router} from 'express';

const routes = Router();


//import controllers
import UserController from '../controllers/UserController';

//import middlewares
import AuthMiddleware from '../middlewares/AuthMiddleware';

routes.post('/', UserController.create);
routes.get('/', UserController.authenticate);

export default routes;
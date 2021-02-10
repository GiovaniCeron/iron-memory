import {Router} from 'express';

const routes = Router();

//import controllers
import UserController from '../controllers/UserController';

routes.post('/', UserController.create);
routes.post('/login', UserController.authenticate);

export default routes;

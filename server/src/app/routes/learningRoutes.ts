import {Router} from 'express';

const routes = Router();

import LearningController from '../controllers/LearningController';

routes.get('/', LearningController.index);
routes.post('/', LearningController.update);

export default routes;
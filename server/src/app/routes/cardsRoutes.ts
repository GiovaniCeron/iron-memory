import {Router} from 'express';

const routes = Router();

import CardsController from '../controllers/CardsController';

routes.post('/', CardsController.create);
routes.get('/', CardsController.index);
routes.get('/:id', CardsController.show);
routes.delete('/:id', CardsController.delete);

export default routes;


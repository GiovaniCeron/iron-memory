import {Router} from 'express';

const routes = Router();

import DeckController from '../controllers/DeckController';

routes.post('/', DeckController.create);
routes.get('/', DeckController.index);
routes.get('/:id', DeckController.show);
routes.delete('/:id', DeckController.delete);

export default routes;
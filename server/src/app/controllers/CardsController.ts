import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

//import Models
import Card from '../models/Card';
import Deck from '../models/Deck';
import Learning from '../models/Learning';

//import services
import CreateDateLearn from '../services/CreateDateLearn';
import Paginate from '../services/Paginate';

class CardsController {

  async create(request: Request, response: Response) {
    const repositoryCard = getRepository(Card);
    const repositoryDeck = getRepository(Deck);
    const repositoryLearning = getRepository(Learning);

    const { front, verse, deckId } = request.body;

    const deck = await repositoryDeck.findOne({ where: { id: deckId } });

    if (!deck) {
      return response.sendStatus(409);
    }

    const card = repositoryCard.create({ front, verse, deck });
    await repositoryCard.save(card);

    if (!card) {
      return response.sendStatus(409);
    }

    const dateLearn = await CreateDateLearn.create(card);

    const learn = repositoryLearning.create({ card, dateLearn: dateLearn, hit: false, incorret: false, learn: false })
    await repositoryLearning.save(learn);

    return response.json(card);

  }

  async index(request: Request, response: Response) {
    const repositoryCard = getRepository(Card);

    const { limitIndex, offsetIndex } = Paginate.create(request);

    const cards = await repositoryCard.find({ take: limitIndex, skip: offsetIndex });

    return response.json(cards);

  }

  async show(request: Request, response: Response) {
    const repositoryCard = getRepository(Card);

    const cardId = request.params.id;

    const card = await repositoryCard.findOne(cardId);

    if (!card) {
      return response.sendStatus(500);
    }

    return response.json(card);

  }

  async delete(request: Request, response: Response) {
    const repositoryCard = getRepository(Card);

    const cardId = request.params.id;

    const card = await repositoryCard.delete(cardId);

    if (!card) {
      return response.sendStatus(500);
    }

    return response.sendStatus(200);
  }

}

export default new CardsController();
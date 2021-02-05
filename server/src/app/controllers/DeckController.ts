import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Deck from '../models/Deck';
import User from '../models/User';

class DeckController {
  async create(request: Request, response: Response) {
    const repositoryDeck = getRepository(Deck);
    const repositoryUser = getRepository(User);

    const { name, description } = request.body;
    const idUser = request.userId;

    const userFind = await repositoryUser.findOne({ where: { id: idUser } })

    if (!userFind) {
      return response.sendStatus(409);
    }

    const deck = repositoryDeck.create({ name, description, user: userFind });
    await repositoryDeck.save(deck);

    return response.json(deck);

  }

  async index(request: Request, response: Response) {
    const repositoryDeck = getRepository(Deck);
    const repositoryUser = getRepository(User);

    const idUser = request.userId;

    const userFind = await repositoryUser.findOne({ where: { id: idUser } })

    if (!userFind) {
      return response.sendStatus(409);
    }

    const decks = await repositoryDeck.find({ where: { user: userFind } })

    return response.json(decks);

  }

  async show(request: Request, response: Response) {
    const deckId = request.params.id;

    const repositoryDeck = getRepository(Deck);

    const deck = await repositoryDeck.findOne(deckId);

    if (!deck) {
      return response.sendStatus(500);
    }

    return response.json(deck);

  }

  async delete(request: Request, response: Response) {
    const deckId = request.params.id;

    const repositoryDeck = getRepository(Deck);

    const deck = await repositoryDeck.delete(deckId);

    if (!deck) {
      return response.sendStatus(500);
    }

    return response.sendStatus(200);
  }


}

export default new DeckController();
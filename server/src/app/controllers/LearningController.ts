import { Request, Response } from 'express';
import { getRepository, MoreThanOrEqual } from 'typeorm';
import moment from 'moment';

import Learning from '../models/Learning';
import Card from '../models/Card';

import CreateDateLearn from '../services/CreateDateLearn';


class LearningController {

  async update(request: Request, response: Response) {
    const repositoryLearning = getRepository(Learning);
    const repositoryCard = getRepository(Card);

    const { id, hit, incorret, learn, dateLearning, cardId } = request.body;

    const learnFind = await repositoryLearning.findOne({id, learn: false});

    if (!learnFind) {
      return response.sendStatus(500);
    }

    const learning = await repositoryLearning.update(id, { hit, incorret, dateLearning, learn });

    if (!learning) {
      return response.sendStatus(500);
    }

    //Cria o Proximo Learn com base na regra de negocio
    const card = await repositoryCard.findOne(cardId);

    const dateLearn = await CreateDateLearn.create(card);

    const learnNew = repositoryLearning.create({ card, dateLearn: dateLearn, hit: false, incorret: false, learn: false })
    await repositoryLearning.save(learnNew);
  
    //return
    return response.sendStatus(200);

  }


  async index(request: Request, response: Response) {
    const repositoryLearning = getRepository(Learning);

    const data = request.query.data as string;

    //valid format date
    if(!moment(data, 'YYYYMMDD').isValid()){
      return response.sendStatus(500);
    }

    const dataForm = moment(data);

    console.log ({"teste": dataForm});

    const learns = await repositoryLearning.find({ where: { dateLearn: MoreThanOrEqual(dataForm) } });

    return response.json(learns);

  }
}

export default new LearningController();



import moment from 'moment';
import { getRepository } from 'typeorm';
import Card from '../models/Card';
import Learning from '../models/Learning';


/**
 * Regra de Nergocio que cria a proxima data de aprendizado de uma Carta
 */
class CreateDateLearn {
  async create(card: Card) {
    /**
     *  - Verificar se a carta possui Learing
     *  - Se não possuir, criar a data mais proxima
     *  - Se possuir usar o calculo para criar a proxima data
     */

    const repositoryLearning = getRepository(Learning);

    const learns = await repositoryLearning.find({ where: { card: card } });

    const dateLearn = (() => {

      if (!learns) {
        const learningHit = learns.filter(learn => learn.hit && learn.learn);

        const dates = [] as Date[];

        learningHit.map(learn => dates.push(learn.dateLearn));

        const dateLeanMax = new Date(Math.max.apply(dates));

        return moment(dateLeanMax).add(learningHit.length + 1, 'days');

      }

      return moment().add(1, 'days');

    });


    return dateLearn();
  }
}

export default new CreateDateLearn();
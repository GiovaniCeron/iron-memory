import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Card from './Card';

@Entity('learning')
class Learning {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Card, card => card.learning)
  card: Card;

  @Column('date', { name: "date_learn", nullable: false })
  dateLearn: Date;

  @Column('boolean', { default: false, nullable: false })
  hit: boolean;

  @Column('boolean', { default: false, nullable: false })
  incorret: boolean;

  @Column('date', {name: "date_learning"})
  dateLearning: Date;

  @Column('boolean', { default: false, nullable: false })
  learn: boolean;

}

export default Learning;
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import User from './User';

@Entity('decks')
class Deck {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @ManyToOne(() => User, user => user.decks, {
    lazy: true
  })
  user : User

  @Column('timestamp')
  date_create: Date;

  @Column('timestamp')
  date_update: Date;

}

export default Deck;
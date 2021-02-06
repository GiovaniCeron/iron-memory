import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import User from './User';
import Card from './Card';

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

  @OneToMany(() => Card, card => card.deck, {
    lazy: true
  })
  cards : Card[]

}

export default Deck;
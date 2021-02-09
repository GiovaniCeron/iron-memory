import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import Deck from './Deck';
import Learning from './Learning';

@Entity('cards')
class Card {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text', { nullable: false })
  front: string;

  @Column('text', { nullable: false })
  verse: string;

  @ManyToOne(() => Deck, deck => deck.cards, {
    lazy: true
  })
  deck: Deck;

  @Column('timestamp')
  date_create: Date;

  @Column('timestamp')
  date_update: Date;

  @OneToMany(() => Learning, learning => learning.card)
  learning: Learning[]

}

export default Card;
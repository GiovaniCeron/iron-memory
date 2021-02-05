import { Entity, Column, PrimaryGeneratedColumn, 
  BeforeInsert, BeforeUpdate, OneToMany, JoinColumn } from 'typeorm';
import bcrypt from 'bcryptjs';
import Deck from './Deck';

@Entity('users')
class User {

  @PrimaryGeneratedColumn('increment')
  id : number;

  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('timestamp')
  date_create: Date;

  @Column('timestamp')
  date_update: Date;

  @OneToMany(() => Deck, deck => deck.user, {
    lazy: true
  })
  decks : Deck[]

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
    this.password = bcrypt.hashSync(this.password, 8);
  }

}

export default User;
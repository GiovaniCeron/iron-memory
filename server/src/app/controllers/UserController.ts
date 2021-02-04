import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class UserController {
  async create(request: Request, response: Response) {
    const repository = getRepository(User);

    const { name, email, password } = request.body;

    const userExistis = await repository.findOne({ where: { email } })

    if (userExistis) {
      return response.sendStatus(409);
    }

    const user = repository.create({ name, email, password });
    await repository.save(user);

    return response.json(user);
  }

  async authenticate(request: Request, response: Response) {
    const repository = getRepository(User);

    const { name, email, password } = request.body;

    //Valid user with email
    const user = await repository.findOne({ where: { email } })

    if (!user) {
      return response.sendStatus(401);
    }

    //Valid user with password use bcript
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return response.sendStatus(401);
    }

    //create token with jwt
    const token = jwt.sign({id: user.id}, process.env.SECRET_TOKEN, {expiresIn: '1d'});

    delete user.password;

    return response.json({
      user,
      token
    });
  }
}

export default new UserController();
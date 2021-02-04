import { Request, Response, NextFunction, json } from 'express';
import jwt from 'jsonwebtoken';

interface Token {
  id: number;
  iat: number;
  exp: number;
}

function AuthMiddleware(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, process.env.SECRET_TOKEN);

    const { id } = data as Token;

    request.userId = id;

    next();
  } catch {
    return response.sendStatus(401);
  }
}

export default AuthMiddleware;
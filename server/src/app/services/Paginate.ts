import { Request } from 'express';

class Paginete {
  create(request: Request) {

    const { page, limit } = request.query;
    const limitIndex = Number(page) * Number(limit);
    const offsetIndex = (Number(page) - 1) * Number(limit);
    
    return { limitIndex, offsetIndex };
  }
}


export default new Paginete();
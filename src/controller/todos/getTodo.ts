import { getTodo as getTodoInDB } from '../../tempDB';

import type { Request, Response } from 'express';

const getTodo = (req: Request, res: Response) => {
  const { userId } = req.cookies;
  const { todoId } = req.params;
  const todo = getTodoInDB(userId, todoId);
  if (todo !== undefined) {
    res.json(todo);
  } else {
    res.json({ message: 'error' });
  }
};

export default getTodo;

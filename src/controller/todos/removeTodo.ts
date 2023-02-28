import type { Request, Response } from 'express';

import { removeTodo as removeTodoInDB } from '../../tempDB';

const removeTodo = (req: Request, res: Response) => {
  const { userId } = req.cookies;
  const { todoId } = req.params;
  const todo = removeTodoInDB(userId, todoId);
  if (todo !== undefined) {
    res.json(todo);
  } else {
    res.json({ message: 'error' });
  }
};

export default removeTodo;

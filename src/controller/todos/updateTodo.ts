import { updateTodo as updateTodoInDB } from '../../tempDB';
import type { Request, Response } from 'express';

const updateTodo = (req: Request, res: Response) => {
  const { userId } = req.cookies;
  const { todoId } = req.params;
  const { title, content, isDone } = req.body;

  const updatedTodo = updateTodoInDB(userId, todoId, title, content, Boolean(isDone));
  if (updateTodo !== undefined) {
    res.json({ todo: updatedTodo });
  } else {
    res.json({ message: 'error' });
  }
};

export default updateTodo;

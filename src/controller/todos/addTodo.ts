import { addTodo as addTodoIntoDB } from '../../tempDB';

import type { Request, Response } from 'express';

const addTodo = (req: Request, res: Response) => {
  const { userId } = req.cookies;
  const { title, content } = req.body;
  const newTodo = addTodoIntoDB(userId, title, content);
  if (newTodo !== undefined) {
    res.status(201).json({
      todo: newTodo,
      message: '작성완료',
    });
  } else {
    res.json({ message: 'error' });
  }
};

export default addTodo;

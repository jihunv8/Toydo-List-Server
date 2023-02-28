import { getTodoList as getTodoListInDB } from '../../tempDB';
import type { Request, Response } from 'express';

const getTodoList = (req: Request, res: Response) => {
  const { userId } = req.cookies;
  const todoList = getTodoListInDB(userId);
  if (todoList !== undefined) {
    res.json({
      todos: todoList,
    });
  } else {
    res.json({ message: 'error' });
  }
};

export default getTodoList;

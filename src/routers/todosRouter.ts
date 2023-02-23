import { Router } from 'express';
import type { Request, Response } from 'express';

const todoRouter = Router();

todoRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello todos');
});

export default todoRouter;

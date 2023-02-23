//users
import { Router } from 'express';
import type { Request, Response } from 'express';

const usersRouter = Router();

usersRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello users');
});

export default usersRouter;

import type { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
  res.send('login');
};

export default login;

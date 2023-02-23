import express from 'express';
import type { Express, Request, Response } from 'express';
import todoRouter from './routers/todosRouter';
import usersRouter from './routers/usersRouter';

const app: Express = express();
const port = 5000;

app.use(express.json());

app.use('/users', usersRouter);
app.use('/todos', todoRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log('server is running');
});

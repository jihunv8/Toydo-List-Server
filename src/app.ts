import express from 'express';
import cors from 'cors';
import todoRouter from './routers/todosRouter';
import usersRouter from './routers/usersRouter';

import type { Express, Request, Response } from 'express';

const app: Express = express();
const port = 5000;

app.use(express.json());
app.use(
  cors({
    // CORS 설정
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
  })
);

app.use((req, res, next) => {
  console.log('요청들어옴');
  next();
});

app.use('/users', usersRouter);
app.use('/todos', todoRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log('server is running');
});

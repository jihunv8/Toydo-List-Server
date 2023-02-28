import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import todoRouter from './routers/todosRouter';
import usersRouter from './routers/usersRouter';

import type { Express, Request, Response } from 'express';

const app: Express = express();
const port = 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // CORS 설정
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'OPTIONS', 'PATCH', 'DELETE'],
  })
);

app.use((req: Request, res: Response, next) => {
  console.log(`${req.method} ${req.url}`);
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

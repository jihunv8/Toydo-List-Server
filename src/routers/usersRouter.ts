//users
import { Router } from 'express';

import login from '../controller/users/login';
import signUp from '../controller/users/signUp';

const usersRouter = Router();

usersRouter.post('/new-user', signUp);

usersRouter.post('/login', login);

export default usersRouter;

import { Router } from 'express';

import addTodo from '../controller/todos/addTodo';
import getTodo from '../controller/todos/getTodo';
import getTodoList from '../controller/todos/getTodoList';
import removeTodo from '../controller/todos/removeTodo';
import updateTodo from '../controller/todos/updateTodo';

const todoRouter = Router();

todoRouter.post('/', addTodo);
todoRouter.get('/', getTodoList);
todoRouter.get('/:todoId', getTodo);
todoRouter.put('/:todoId', updateTodo);
todoRouter.delete('/:todoId', removeTodo);

export default todoRouter;

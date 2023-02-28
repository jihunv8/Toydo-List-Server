// TodoId = userId + '&' + Date.now()
type TodoId = string;

// createAt = Date.now();
type Todo = {
  title: string;
  content: string;
  isDone: boolean;
  createAt: number;
};

type Todos = Map<TodoId, Todo>;

type UserId = string;

type User = {
  name: string;
  password: string;
  todos: Todos;
};

const initUser: [UserId, User] = [
  'test1234',
  {
    name: 'test',
    password: 'test1234',
    todos: new Map<TodoId, Todo>([
      [
        'test1234&1677464787993',
        {
          title: '초기 데이터2',
          content: '테스트하기 위한초기 데이터입니다.222222222',
          createAt: 1677464787993,
          isDone: false,
        },
      ],
      [
        'test1234&1677464784773',
        {
          title: '초기 테스트 데이터',
          content: '테스트하기 위한초기 데이터입니다.',
          createAt: 1677464784773,
          isDone: false,
        },
      ],
    ]),
  },
];

const users = new Map<UserId, User>([initUser]);

export const addUser = (userId: UserId, name: string, password: string): boolean => {
  const temp = users.get(userId);
  if (temp !== undefined) {
    //id 중복
    return false;
  }

  users.set(userId, { name, password, todos: new Map<TodoId, Todo>() });
  return true;
};

export const getUser = (userId: UserId) => {
  const user = users.get(userId);
  if (user !== undefined) {
    return { userId, ...user };
  } else {
    return undefined;
  }
};

export const addTodo = (userId: UserId, title: string, content: string) => {
  const user = users.get(userId);
  if (user === undefined) return undefined;

  const createAt = Date.now();
  const todoId = `${userId}&${createAt}`;
  const newTodo: Todo = {
    title,
    content,
    createAt,
    isDone: false,
  };

  user.todos.set(todoId, newTodo);

  return {
    todoId,
    ...newTodo,
  };
};

export const getTodo = (userId: UserId, todoId: TodoId) => {
  const user = users.get(userId);
  if (user === undefined) return undefined;

  const todo = user.todos.get(todoId);
  if (todo === undefined) return undefined;

  return { todoId, ...todo };
};

export const getTodoList = (userId: UserId) => {
  const user = users.get(userId);
  if (user === undefined) return undefined;
  const todos = user.todos;

  type TodoListItem = {
    todoId: string;
    title: string;
    isDone: boolean;
    createAt: number;
  };

  const todoList: TodoListItem[] = [];

  for (let [key, value] of todos) {
    todoList.push({
      todoId: key,
      title: value.title,
      isDone: value.isDone,
      createAt: value.createAt,
    });
  }

  todoList.sort((a, b) => {
    return b.createAt - a.createAt;
  });

  return todoList;
};

export const updateTodo = (userId: UserId, todoId: TodoId, title: string, content: string, isDone: boolean) => {
  const user = users.get(userId);
  if (user === undefined) return undefined;

  const todo = user.todos.get(todoId);
  if (todo === undefined) return undefined;

  const updatedTodo = {
    ...todo,
    title,
    content,
    isDone,
  };

  user.todos.set(todoId, updatedTodo);
  return { ...updatedTodo, todoId };
};

export const removeTodo = (userId: UserId, todoId: TodoId) => {
  const user = users.get(userId);
  if (user === undefined) return undefined;

  const todo = user.todos.get(todoId);
  if (todo === undefined) return undefined;

  user.todos.delete(todoId);
  return todo;
};

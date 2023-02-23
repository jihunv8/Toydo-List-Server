type Id = string;
type User = {
  name: string;
  password: string;
};

const users = new Map<Id, User>([['test123', { name: 'test', password: 'test123' }]]);

export const addUser = (id: Id, name: string, password: string): boolean => {
  const temp = users.get(id);
  if (temp !== undefined) {
    //id 중복
    return false;
  }

  users.set(id, { name, password });
  return true;
};

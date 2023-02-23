import { addUser } from '../../tempDB';

import type { Request, Response } from 'express';

const signUp = (req: Request, res: Response) => {
  const { id, name, password } = req.body;
  const isAdded = addUser(id, name, password);

  if (isAdded) {
    res.json({
      user: {
        id,
        name,
      },
      message: '회원가입 되었습니다',
    });
  } else {
    res.status(409).json({
      message: '중복된 아이디 입니다.',
    });
  }
};

export default signUp;

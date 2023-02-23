import { getUser } from '../../tempDB';
import type { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
  const id = req.body?.id;
  const user = getUser(id);

  if (user === undefined) {
    res.status(404).json({
      message: '존재하지 않는 아이디입니다.',
    });
  } else if (user.password !== req.body.password) {
    res.status(401).json({
      message: '비밀번호를 잘못 입력했습니다.',
    });
  } else {
    res.cookie('id', id);
    res.json({
      user,
      message: '로그인 되었습니다',
    });
  }
};

export default login;

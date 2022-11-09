import { Request, Response } from "express";
import { registerNewUser, loginUser } from '../services/auth';

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseRegistro = await registerNewUser(body);
  res.send(responseRegistro);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === 'PASSWORD_INCORRECT') {
    res.status(403);
  }
  res.send(responseUser);
};

export { registerCtrl, loginCtrl };

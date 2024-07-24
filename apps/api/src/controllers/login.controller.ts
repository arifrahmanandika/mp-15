import { Request, Response } from 'express';
import prisma from '@/prisma';

export class LoginController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return res.status(401).send('Invalid credentials');
    }

    const token = 'token_login';

    return res.status(200).send({ token });
  }
}

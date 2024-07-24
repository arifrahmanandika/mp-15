import { LoginController } from '@/controllers/login.controller';
import { Router } from 'express';

export class LoginRouter {
  private router: Router;
  private loginController: LoginController;
  constructor() {
    this.loginController = new LoginController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/login', this.loginController.login);
  }

  public getRouter(): Router {
    return this.router;
  }
}

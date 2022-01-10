import { Router, Request, Response } from 'express';
import container from '../dependency-injection';

export const register = (router: Router) => {
    const cakePostController = container.get('App.controllers.CakePostController');
    router.post('/cakes', (req: Request, res: Response) => cakePostController.run(req, res));
};

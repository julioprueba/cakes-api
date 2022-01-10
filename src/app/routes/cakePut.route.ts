import { Router, Request, Response } from 'express';
import container from '../dependency-injection';

export const register = (router: Router) => {
    const cakePutController = container.get('App.controllers.CakePutController');
    router.put('/cakes', (req: Request, res: Response) => cakePutController.run(req, res));
};

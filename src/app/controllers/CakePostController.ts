import { Request, Response } from 'express';
import { Controller } from './Controller';

export class CakePostController implements Controller {
    constructor() {}

    async run(req: Request, res: Response) {
        res.status(201).send();
    }
}

import { Request, Response } from 'express';
import { Controller } from './Controller';
import { CakeCreator } from '../../BoundedContext/Cakes/application/CakeCreator';

type CakePutRequest = Request & {
    body: {
        name: string;
        img: string;
    };
};

export class CakePostController implements Controller {
    constructor(private cakeCreator: CakeCreator) {}

    async run(req: CakePutRequest, res: Response) {
        try {
            const cake = await this.cakeCreator.run(req.body.name, req.body.img);
            res.status(201).send(cake);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

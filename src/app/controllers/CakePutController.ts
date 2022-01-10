import { Request, Response } from 'express';
import { Controller } from './Controller';
import { CakeUpdater } from '../../BoundedContext/Cakes/application/CakeUpdater';

type CakePutRequest = Request & {
    body: {
        id: number,
        name: string;
        img: string;
    };
};

export class CakePutController implements Controller {
    constructor(private cakeUpdater: CakeUpdater) {}

    async run(req: CakePutRequest, res: Response) {
        try {
            await this.cakeUpdater.run(req.body.id, req.body.name, req.body.img);
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

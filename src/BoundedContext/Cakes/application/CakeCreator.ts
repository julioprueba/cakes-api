import { CakeToCreate } from '../domain/CakeToCreate';
import { CakeRepository } from '../domain/CakeRepository';

export class CakeCreator {
    constructor(private repository: CakeRepository) {}

    async run(name: string, img: string) {
        const cake = new CakeToCreate(name, img);

        return this.repository.save(cake);
    }
}

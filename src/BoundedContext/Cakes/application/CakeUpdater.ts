import { Cake } from '../domain/Cake';
import { CakeRepository } from '../domain/CakeRepository';

export class CakeUpdater {
    constructor(private repository: CakeRepository) {}

    async run(id: number, name: string, img: string) {
        const cake = new Cake(id, name, img);

        return this.repository.update(cake);
    }
}

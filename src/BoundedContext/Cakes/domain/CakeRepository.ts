import { Cake } from './Cake';
import { CakeToCreate } from './CakeToCreate';

export interface CakeRepository {
    find(id: number): Promise<Cake>;

    save(cake: CakeToCreate): Promise<Cake>;

    update(cake: Cake): Promise<void>;

    delete(id: number): Promise<void>;
}

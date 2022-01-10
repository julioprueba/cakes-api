import { CakeUpdater } from '../../../src/BoundedContext/Cakes/application/CakeUpdater';
import { CakeRepository } from '../../../src/BoundedContext/Cakes/domain/CakeRepository';
import { Cake } from '../../../src/BoundedContext/Cakes/domain/Cake';

describe('CakeUpdater', () => {
    it('should update a valid cake', async () => {
        const repository: CakeRepository = {
            find: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };
        const updater = new CakeUpdater(repository);
        const id = 1;
        const name = 'name';
        const img = 'img';
        const expectedCake = new Cake(id, name, img);

        await updater.run(id, name, img);

        expect(repository.update).toHaveBeenCalledWith(expectedCake);
    });
});

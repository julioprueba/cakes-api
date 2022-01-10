import { CakeToCreate } from '../../../src/BoundedContext/Cakes/domain/CakeToCreate';
import { CakeRepositoryMock } from '../../../src/BoundedContext/Cakes/__mocks__/CakeRepositoryMock';

describe('Save Cake', () => {
    it('should have a cake', async () => {
        const repository = new CakeRepositoryMock();
        const cake = new CakeToCreate('The best cake', 'https://www.cocinacaserayfacil.net/tarta-de-queso-vina/');

        await repository.save(cake);
    });
});

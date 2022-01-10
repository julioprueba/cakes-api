import { CakeRepository } from '../../../../src/BoundedContext/Cakes/domain/CakeRepository';
import { Cake } from '../../../../src/BoundedContext/Cakes/domain/Cake';
import { CakeToCreate } from '../../../../src/BoundedContext/Cakes/domain/CakeToCreate';

export class CakeRepositoryMock implements CakeRepository {
    private mockSave = jest.fn();

    async save(cakeToCreate: CakeToCreate): Promise<Cake> {
        const cake = this.mockSave(cakeToCreate);
        return cake;
    }

    find(id: number): Promise<Cake> {
        throw new Error('Method not implemented.');
    }
    update(cake: Cake): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

    assertLastSavedCakeIs(expected: CakeToCreate): void {
        const mock = this.mockSave.mock;
        const lastSavedCake = mock.calls[mock.calls.length - 1][0] as CakeToCreate;
        expect(lastSavedCake).toBeInstanceOf(CakeToCreate);
    }
}

describe('CakeCreator', () => {
  it('should create a valid cake', async () => {
    const repository: CakeRepository = {
            find: jest.fn(),
      save: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()

    };
    const creator = new CakeCreator(repository);
    const name = 'name';
    const img = 'img';
    const expectedCake = new CakeToCreate(name, img);

    await creator.run(name, img);

    expect(repository.save).toHaveBeenCalledWith(expectedCake);
  });
});

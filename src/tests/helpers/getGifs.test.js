import getGifs from '../../helpers/getGifs';

describe('Pruebas con getGifs', () => {
  test('debe de traer 10 elementos', async () => {
    const gifs = await getGifs('Dragon Ball');

    expect(gifs.length).toBe(10);
  });

  test('debe retornar un error si no pasamos la categoría como argumento', async () => {
    await expect(getGifs()).rejects.toThrow(`Category can't be null`);
  });
});

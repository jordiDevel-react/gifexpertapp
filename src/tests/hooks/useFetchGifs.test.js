import { renderHook } from '@testing-library/react-hooks';
import useFetchGifs from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  const category = 'Dragon Ball';

  test('debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe retornar un array de 10 imágenes y el loading a false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});

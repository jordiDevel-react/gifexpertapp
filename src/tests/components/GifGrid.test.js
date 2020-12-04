import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid /> ', () => {
  const category = 'Dragon Ball';

  test('debe mostrar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar items cuando se cargan las imágenes', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier cosa',
      },
      {
        id: 'def',
        url: 'https://localhost/cualquier/otracosa.jpg',
        title: 'Otra cosa',
      },
    ];
    useFetchGifs.mockReturnValue({ data: gifs, loading: false });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});

import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem /> ', () => {
  const title = 'Un titulo para pruebas';
  const url = 'Una URL para pruebas';
  const divCssClass = 'card animate__animated animate__fadeIn';

  const params = {
    title,
    url,
  };

  const wrapper = shallow(<GifGridItem {...params} />);

  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar un párrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text()).toBe(title);
  });

  test('debe mostrar una imagen con url en el src y title en el alt', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('el div debe tener las clases css correctas', () => {
    const div = wrapper.find('div');
    expect(div.hasClass(divCssClass)).toBe(true);
  });
});

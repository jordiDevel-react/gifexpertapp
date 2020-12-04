import { shallow } from 'enzyme';

import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory /> ', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    expect(wrapper.find('input').prop('value')).toBe('');

    const value = 'Hola Mundo';

    wrapper.find('input').simulate('change', { target: { value } });

    expect(wrapper.find('input').prop('value')).toBe(value);
  });

  test('no debe hacer submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe hacer submit', () => {
    const value = 'Hola Mundo';

    wrapper.find('input').simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});

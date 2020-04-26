import React from 'react'
import Header from './Header'
import 'regenerator-runtime'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{ shallow } from 'enzyme'
import { Provider } from '../../context/NewsContext'
Enzyme.configure({ adapter: new Adapter() });
test('Mout Header component', () => {
  const wrapper = shallow(<Provider><Header /></Provider>)
  expect(wrapper).toMatchSnapshot();
})

